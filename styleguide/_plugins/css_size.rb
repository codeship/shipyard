module Jekyll
  class CssSize < Liquid::Tag
    def initialize(tag_name, args, options)
      super
    end

    def render(context)
      sass = context['site']['sass_output'].detect { |s|
        s[:file].include? context['page']['sass_file']
      }
      size = sass[:gzip_size]
      case
      when size >= 1000 then "#{(size / 1000.0).round(1)} kb"
      else "#{size} b"
      end
    end
  end
end

Liquid::Template.register_tag('css_size', Jekyll::CssSize)
