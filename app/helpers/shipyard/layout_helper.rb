module Shipyard
  module LayoutHelper
    def shipyard_css_classes
      css_classes = []
      css_classes << current_page
      css_classes << current_controller
      css_classes << "env-#{::Rails.env}"
      css_classes.join(' ')
    end

    def current_controller
      controller.controller_name.dasherize
    end

    def current_action
      controller.action_name.dasherize
    end

    def current_page
      "#{current_controller}-#{current_action}"
    end

    def current_route
      "#{controller.controller_name}##{controller.action_name}"
    end

    def current_route_is?(routes)
      routes.tr(' ', '').split(',').include? current_route
    end
  end
end
