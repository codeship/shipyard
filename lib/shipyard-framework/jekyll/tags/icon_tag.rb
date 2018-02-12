require 'shipyard-framework/helpers/icon_helper'

module Shipyard
  module Jekyll
    class Icon < Liquid::Tag
      include Shipyard::IconHelper

      def initialize(tag_name, params, options)
        super
        @options = {}
        params.strip.split(',').each_with_index do |arg, index|
          if index == 0
            @name = eval(arg)
          else
            @options.merge!(eval("{#{arg}}"))
          end
        end
      end

      def render(context)
        icon @name, @options
      end
    end
  end
end
