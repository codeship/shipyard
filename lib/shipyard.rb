require 'shipyard/version'
require 'shipyard/icons'

module Shipyard
  class << self
    def load!
      if rails?
        register_rails_engine
        reload_icons if ::Rails.env.development?
      elsif sprockets?
        register_sprockets
      end

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

    def configure_sass
      require 'sass'

      ::Sass.load_paths << stylesheets_path
    end

    def register_rails_engine
      require 'shipyard/rails/engine'
      require 'shipyard/rails/railtie'
    end

    def register_sprockets
      Sprockets.append_path(stylesheets_path)
      Sprockets.append_path(javascripts_path)
    end

    # Reloads icons when files are changed.
    def reload_icons
      # ::Rails.application.reloaders << Icons.instance
      # ::Rails.application.config.to_prepare { Icons.instance.execute_if_updated }
    end
  end
end

Shipyard.load!
