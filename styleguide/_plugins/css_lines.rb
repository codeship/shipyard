require 'sass'

module Jekyll
  class CssLines < Liquid::Tag

    def initialize(tag_name, sass_path, options)
      super
      @sass = %(@import "shipyard/core"\n)
      @sass += File.read("../assets/stylesheets/#{sass_path.strip}.sass")
      @engine = Sass::Engine.new(@sass, syntax: :sass, style: :compressed)
      @output = @engine.render
    end

    def render(context)
      @declarations = @output.scan(/{/).size
      @selectors = @output.scan(/[.][a-zA-Z\-][a-zA-Z0-9\-]*/).size
      @selectors
    end
  end
end

Liquid::Template.register_tag('css_lines', Jekyll::CssLines)
