module Shipyard
  class Icons
    include ActionView::Helpers::SanitizeHelper
    include Singleton
    attr_reader :icons
    delegate :each, :find, to: :icons
    delegate :execute_if_updated, :execute, :updated?, to: :updater

    def initialize
      @path = "#{::Rails.root}/app/assets/icons/"
      @public = "#{::Rails.root}/public/assets"
      reload
    end

    def reload
      @icons = load_svgs.freeze
      save_external_svg_defs
    end

    def find_by(hash)
      icon = @icons.detect { |i| i[hash.keys.first] == hash.values.first }
      raise_error(hash.values.first) unless icon
      icon
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
          inner_html: sanitize_svg(html).gsub(/\n|\s+\s+/, ''),
          is_outlined: html.include?('non-scaling-stroke')
        }
      end
    end

    def save_external_svg_defs
      html = []
      @icons.each do |icon|
        html << svg_group(icon)
      end
      Dir.mkdir(@public) unless File.exists?(@public) || Dir.exists?(@public)
      File.write("#{@public}/icons.svg", svg_template(html.join))
    end

    def sanitize_svg(html)
      sanitize(html,
               tags: %w(g circle rect path line polyline),
               attributes: %w(x x1 x2 y y1 y2 d cx cy r vector-effect points class))
    end

    def svg_group(icon)
      %(<g id="#{icon[:id]}">#{icon[:inner_html]}</g>)
    end

    def svg_template(html)
      %(
        <?xml version="1.0" standalone="no"?>
        <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <defs>#{html}</defs>
        </svg>
      ).gsub(/\n|\s+\s+/, '')
    end

    def files
      Dir[Pathname(@path).join('**/*.svg')]
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
