require_relative '../../../app/helpers/shipyard/icon_helper'

module Shipyard
  module Jekyll
    class Icon < Liquid::Tag
      include Shipyard::IconHelper

      def initialize(tag_name, params, options)
        super
        @args = eval(params)
      end

      def render(context)
        icon @args
      end
    end
  end
end
