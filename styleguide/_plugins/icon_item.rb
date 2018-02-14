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
        <li class="col col-50 col-x1-20 margin-bottom-xs margin-bottom-x1-md margin-bottom-x2-lg" tooltip="#{@tooltip}">
          <div class="box box-md box-x1-xxl #{@css}">
            #{icon @name, @options}
          </div>
        </li>
      )
    end
  end
end

Liquid::Template.register_tag('iconitem', Jekyll::IconItem)
