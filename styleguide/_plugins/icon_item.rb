require 'shipyard-framework/helpers/icon_helper'

module Jekyll
  class IconItem < Liquid::Tag
    include Shipyard::IconHelper

    def initialize(tag_name, args, options)
      super
      args = args.strip.split(',')
      @name = eval(args[0])
      @tooltip = args[0]
      @options = args[1] ? eval("{#{args[1]}}") : {}
      @css = 'bg-gray' if @name == 'bitbucket-white'
    end

    def render(context)
      %(
        <li class="col col-50 sm:col-20 mb-10 sm:mb-20 md:mb-30 tooltip-data tooltip-data-top" data-tooltip="#{@tooltip}">
          <div class="box h-80 sm:h-100 #{@css}">
            #{icon @name, @options}
          </div>
        </li>
      )
    end
  end
end

Liquid::Template.register_tag('iconitem', Jekyll::IconItem)
