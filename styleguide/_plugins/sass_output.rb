module Jekyll
  class SassOutput < Liquid::Tag
    def initialize(tag_name, args, options)
      super
    end

    def render(context)
      sass = context['site']['sass_output'].detect { |s|
        s['file'].include? context['page']['sass_file']
      }
      output = sass['compressed_css']
      output.gsub! /{/, ' { '
      output.gsub! /}([^}])/, " }\n\\1" # Match closing brackets
      output.gsub! /@media(.*)\) { /, "\n@media\\1) {\n" # Match @media opening brackets
      output.gsub! /} }/, " }\n}" # Match @media closing brackets
      output.gsub! /([a-z0-9]*),\./, "\\1,\n." # Match each declaration
      output.gsub! /\),./, "),\n." # Match :not(...),.class
      output.gsub! /([a-z]):(?!:|not|hover)/, '\1: \2' # Match CSS properties
      output.gsub! /([a-z.]*)\\:/, '  \1:' # Clean up the responsive classes
      output.gsub! /;/, '; '
      output.gsub! /\n\z/, ''
      output
    end
  end
end

Liquid::Template.register_tag('sass_output', Jekyll::SassOutput)
