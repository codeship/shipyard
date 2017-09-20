require 'shipyard-framework/version'
require 'action_view'

module Shipyard
  class << self
    def load!
      if rails?
        register_rails_engine
      elsif sprockets?
        register_sprockets
      elsif jekyll?
        register_jekyll_tags
      end

      register_helpers
      configure_sass
    end

    # Paths
    def gem_path
      @gem_path ||= File.expand_path '..', File.dirname(__FILE__)
    end

    def stylesheets_path
      File.join assets_path, 'stylesheets'
    end

    def javascripts_path
      File.join assets_path, 'javascripts'
    end

    def icons_path
      File.join assets_path, 'icons'
    end

    def assets_path
      @assets_path ||= File.join gem_path, 'assets'
    end

    private

    def sprockets?
      defined?(::Sprockets)
    end

    def rails?
      defined?(::Rails)
    end

    def jekyll?
      defined?(::Jekyll) && defined?(::Liquid)
    end

    def configure_sass
      require 'sass'
      ::Sass.load_paths << stylesheets_path
    end

    def register_rails_engine
      require 'shipyard-framework/icons'
      require 'shipyard-framework/rails/engine'
      require 'shipyard-framework/rails/railtie'
    end

    def register_sprockets
      Sprockets.append_path(stylesheets_path)
      Sprockets.append_path(javascripts_path)
    end

    def register_jekyll_tags
      require 'shipyard-framework/jekyll/button_tag'
      require 'shipyard-framework/jekyll/box_tag'
      require 'shipyard-framework/jekyll/note_tag'
      require 'shipyard-framework/jekyll/alert_tag'
      require 'shipyard-framework/jekyll/shipyard_version_tag'
      Liquid::Template.register_tag('btn', Shipyard::Jekyll::Button)
      Liquid::Template.register_tag('box', Shipyard::Jekyll::Box)
      Liquid::Template.register_tag('note', Shipyard::Jekyll::Note)
      Liquid::Template.register_tag('alert', Shipyard::Jekyll::Alert)
      Liquid::Template.register_tag('shipyard_version', Shipyard::Jekyll::ShipyardVersion)
    end

    def register_helpers
      Dir['app/helpers/shipyard/*.rb'].each do |file|
        require_relative "../#{file}"
      end
    end
  end
end

Shipyard.load!
