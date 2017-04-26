module Shipyard
  module Rails
    module IconHelper
      include ActionView::Context
      include ActionView::Helpers::TagHelper

      def icon(name, options={})
        if name.is_a? Symbol
          svg = Icons.instance.find_by(symbol: name)
          svg_use_tag svg, options
        else
          svg = Icons.instance.find_by(id: name)
          svg_tag svg, options
        end
      end

      private

      def svg_options(svg, options)
        options[:class] = svg_classes(svg, options)
        options[:viewBox] ||= svg[:view_box]
        options[:preserveAspectRatio] ||= 'xMinYMin meet'
        options.delete(:prefix)
        options
      end

      def svg_classes(svg, options)
        css_classes = []
        css_classes << 'icon'
        css_classes << "icon-#{svg[:id]}"
        css_classes << 'icon-outline' if svg[:is_outlined] == true
        css_classes << "#{options[:prefix]}-icon-#{svg[:id]}" if options[:prefix]
        css_classes << options[:class]
        css_classes.join(' ').strip
      end

      def svg_use_tag(svg, options)
        content_tag :svg, svg_options(svg, options) do
          content_tag :use, nil, 'xlink:href' => "/assets/icons.svg##{svg[:id]}"
        end
      end

      def svg_tag(svg, options)
        html = svg[:inner_html]
        html = html.gsub(/class="([\s\w-]+)"/, "class=\"#{options[:prefix]}-\\1 \\1\"") if options[:prefix]
        content_tag :svg, raw(html), svg_options(svg, options)
      end
    end
  end
end
