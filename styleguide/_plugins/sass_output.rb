module Jekyll
  class SassOutput < Liquid::Tag
    def initialize(tag_name, sass_path, options)
      super
      @sass_path = sass_path.strip
    end

    def render(context)
      sass = context['site']['sass_output'].detect { |s|
        s[:file].include? @sass_path
      }
      output = sass[:css]
      output.gsub! /}/, " }\n"
      output.gsub! /{/, ' { '
      output.gsub! /([a-z]*):/, '\1: '
      output.gsub! /\n\z/, ''
      output
    end
  end
end

Liquid::Template.register_tag('sass_output', Jekyll::SassOutput)
