module Jekyll
  class CssDeclarations < Liquid::Tag
    def initialize(tag_name, sass_path, options)
      super
      @sass_path = sass_path.strip
    end

    def render(context)
      sass = context['site']['sass_output'].detect { |s|
        s[:file].include? @sass_path
      }
      sass[:declarations]
    end
  end
end

Liquid::Template.register_tag('css_declarations', Jekyll::CssDeclarations)
