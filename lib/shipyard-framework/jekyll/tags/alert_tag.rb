require_relative '../../../../app/helpers/shipyard/alert_helper'

module Shipyard
  module Jekyll
    class Alert < Liquid::Block
      include Shipyard::AlertHelper

      def initialize(tag_name, params, options)
        super
        @params = params.strip.split(',').map(&:strip)
        @args = []
        @params.each do |param|
          if param.start_with?(':')
            @args << param.tr(':','').to_sym
          else
            @args << eval("{#{param}}")
          end
        end
      end

      def render(context)
        flash_alert(*@args, super)
      end
    end
  end
end
