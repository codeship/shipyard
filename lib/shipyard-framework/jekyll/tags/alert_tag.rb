require_relative '../../../../app/helpers/shipyard/alert_helper'

module Shipyard
  module Jekyll
    class Alert < Liquid::Block
      include Shipyard::AlertHelper

      def initialize(tag_name, type, options)
        super
        @type = type.strip.tr(':','').to_sym unless type.blank?
      end

      def render(context)
        if @type
          flash_alert @type, super
        else
          flash_alert super
        end
      end
    end
  end
end
