module Jekyll
  class IconItem < Liquid::Block
    def initialize(tag_name, markdown, options)
      super
    end

    def render(context)
      %(
        <li class="col col-50 col-x1-20 margin-bottom-xs margin-bottom-x1-md margin-bottom-x2-lg">
          <div class="box box-md box-x1-xxl">
            #{super}
          </div>
        </li>
      )
    end
  end
end

Liquid::Template.register_tag('iconitem', Jekyll::IconItem)
