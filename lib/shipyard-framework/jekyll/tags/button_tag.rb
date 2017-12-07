require 'shipyard-framework/helpers/button_helper'

module Shipyard
  module Jekyll
    class Button < Liquid::Tag
      include Shipyard::ButtonHelper

      def initialize(tag_name, params, options)
        super
        @params = params.split(',')
        @text = @params[0].strip
        @args = @params[1].to_s.tr(':','').split(' ').map(&:to_sym)
        @args << eval("{#{@params[2]}}") if @params[2]
      end

      def render(context)
        btn @text, *@args
      end
    end
  end
end
