module Jekyll
  class CssSize < Liquid::Tag
    def initialize(tag_name, sass_path, options)
      super
      @sass_path = sass_path.strip
    end

    def render(context)
      sass = context['site']['sass_output'].detect { |s|
        s[:file].include? @sass_path
      }
      "#{sass[:gzip_size]}B"
    end
  end
end

Liquid::Template.register_tag('css_size', Jekyll::CssSize)
