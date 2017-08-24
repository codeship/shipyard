require_relative '../../../app/helpers/shipyard/alert_helper'

module Shipyard
  module Jekyll
    class Alert < Liquid::Tag
      include Shipyard::AlertHelper

      def initialize(tag_name, params, options)
        super
        @params = params.split(',')
        @type = @params[0].tr(':','').to_sym
        @text = @params[1]
      end

      def render(context)
        flash_alert @type, @text
      end
    end
  end
end
