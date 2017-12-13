module Jekyll
  class CssSize < Liquid::Tag
    def initialize(tag_name, args, options)
      super
    end

    def render(context)
      sass = context['site']['sass_output'].detect { |s|
        s[:file].include? context['page']['sass_file']
      }
      "#{sass[:gzip_size]}B"
    end
  end
end

Liquid::Template.register_tag('css_size', Jekyll::CssSize)
