module Shipyard
  module Rails
    module LayoutHelpers
      def layout_classes(layout_name)
        "#{layout_name}-layout #{current_page} #{'legacy-content' unless content_for? :new_layout}"
      end

      def header_classes
        case @hero_type
        when :default
          'header header-with-hero'
        when :playful
          'header header-with-hero header-inverse'
        else
          'header'
        end
      end

      def current_page
        "#{controller.controller_name.dasherize}-#{controller.action_name}"
      end

      def current_route
        "#{controller.controller_name}##{controller.action_name}"
      end

      def current_route_is?(routes)
        routes.tr(' ', '').split(',').include? current_route
      end

      def content(options={}, &block)
        type, options = options, {} if options.is_a? Symbol
        options[:class] ||= ''
        options[:class] +=  type ? " content-#{type.to_s.dasherize}" : ' content'
        options[:class] +=  " #{current_page}-content"
        options[:data] ||= {}
        options[:data][:content] = current_page
        content_tag :div, options do
          concat render(partial: 'shipyard/alerts')
          concat capture(&block)
        end
      end
    end
  end
end
