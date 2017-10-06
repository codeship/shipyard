require_relative '../../../../app/helpers/shipyard/box_helper'

module Shipyard
  module Jekyll
    class Box < Liquid::Block
      include Shipyard::BoxHelper

      def initialize(tag_name, types, options)
        super
        @types = []
        types.tr(' ','').split(',').each do |type|
          @types << type.tr(':','').to_sym
        end
      end

      def render(context)
        box @types, raw(super.strip)
      end
    end
  end
end
