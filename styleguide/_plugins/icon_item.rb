require 'shipyard-framework/helpers/icon_helper'

module Jekyll
  class IconItem < Liquid::Tag
    include Shipyard::IconHelper

    def initialize(tag_name, args, options)
      super
      args = args.strip.split(',')
      @name = args[0]
      @options = args[1] ? eval("{#{args[1]}}") : {}
    end

    def render(context)
      %(
        <li class="col col-50 col-x1-20 margin-bottom-xs margin-bottom-x1-md margin-bottom-x2-lg" tooltip="#{@name}">
          <div class="box box-md box-x1-xxl">
            #{icon eval(@name), @options}
          </div>
        </li>
      )
    end
  end
end

Liquid::Template.register_tag('iconitem', Jekyll::IconItem)
