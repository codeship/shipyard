require 'sass'

module Jekyll
  class SassOutput < Liquid::Tag

    def initialize(tag_name, sass_path, options)
      super
      @sass = %(@import "shipyard/core"\n)
      @sass += File.read("../assets/stylesheets/#{sass_path.strip}.sass")
      @engine = Sass::Engine.new(@sass, syntax: :sass, style: :compressed)
      @output = @engine.render
    end

    def render(context)
      @output.gsub! /}/, " }\n"
      @output.gsub! /{/, ' { '
      @output.gsub! /([a-z]*):/, '\1: '
      @output.gsub! /\n\z/, ''
      @output
    end
  end
end

Liquid::Template.register_tag('sass_output', Jekyll::SassOutput)
