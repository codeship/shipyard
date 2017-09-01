require_relative '../../../app/helpers/shipyard/alert_helper'

module Shipyard
  module Jekyll
    class Alert < Liquid::Block
      include Shipyard::AlertHelper

      def initialize(tag_name, type, options)
        super
        @type = type.tr(':','').to_sym
      end

      def render(context)
        flash_alert @type, super
      end
    end
  end
end
