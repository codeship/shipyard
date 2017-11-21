require 'action_view'

module Shipyard
  class Icons
    include ActionView::Helpers::SanitizeHelper
    attr_reader :icons
    delegate :each, :find, to: :icons
    delegate :execute_if_updated, :execute, :updated?, to: :updater

    def initialize(icon_directory, output_directory, base_path = '')
      @path = icon_directory
      @public = output_directory
      @base_path = base_path
      reload
    end

    def reload
      @icons = load_svgs.freeze
      @icons
    end

    def base_path
      "#{@base_path}/assets/icons.svg"
    end

    def asset_path(svg_id)
      "#{base_path}##{svg_id}"
    end

    def write
      html = []
      @icons.each do |icon|
        html << svg_symbol(icon)
      end
      FileUtils.mkdir_p(@public) unless File.exists?(@public) || Dir.exists?(@public)
      File.write("#{@public}/icons.svg", svg_template(html.join))
    end

    private

    def load_svgs
      files.sort.map do |file|
        html = File.read(file)
        {
          file: file,
          path: file.gsub(@path, ''),
          id: File.basename(file).gsub(/.svg/, ''),
          symbol: File.basename(file).gsub(/.svg/, '').underscore.to_sym,
          view_box: html[/viewBox="(.*?)"/, 1],
          outer_html: html.gsub(/\n|\s+\s+/, ''),
          inner_html: html[/<svg.*?>([\s\S]*?)<\/svg>/, 1],
          inner_html_sanitized: sanitize_svg(html).gsub(/\n|\s+\s+/, ''),
          is_outlined: html.include?('non-scaling-stroke')
        }
      end
    end

    def sanitize_svg(html)
      sanitize(html,
               tags: %w(g circle rect path line polyline polygon ellipse),
               attributes: %w(x x1 x2 y y1 y2 d cx cy r rx ry vector-effect points class fill stroke opacity))
    end

    def svg_symbol(icon)
      %(<g id="#{icon[:id]}" viewBox="#{icon[:view_box]}">#{icon[:inner_html]}</g>)
    end

    def svg_template(html)
      %(
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          #{html}
        </svg>
      ).gsub(/\n|\s+\s+/, '')
    end

    def files
      files = Dir[Pathname(Shipyard.icons_path).join('**/*.svg')]
      files.concat Dir[Pathname(@path).join('**/*.svg')]
    end

    def raise_error(name)
      return unless ::Rails.env.development? || ::Rails.env.test?
      raise "Missing icon #{name}"
    end

    def updater
      @updater ||= ActiveSupport::FileUpdateChecker.new([], @path => [:svg]) do
        reload
      end
    end
  end
end
