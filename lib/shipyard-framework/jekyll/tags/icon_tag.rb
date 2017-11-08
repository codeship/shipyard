require 'shipyard-framework/helpers/icon_helper'

module Shipyard
  module Jekyll
    class Icon < Liquid::Tag
      include Shipyard::IconHelper

      def initialize(tag_name, params, options)
        super
        @args = params.strip.split(',')
        @name = eval(@args[0])
        @options = @args[1] ? eval("{#{@args[1]}}") : {}
      end

      def render(context)
        icon @name, @options
      end
    end
  end
end
