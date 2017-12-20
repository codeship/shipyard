require 'shipyard-framework/version'
require 'nokogiri'

module Shipyard
  class << self
    def load!
      if rails?
        register_rails_engine
      elsif sprockets?
        register_sprockets
      end
      register_icons
      load_icons if rspec?

      if jekyll?
        register_jekyll_hooks
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

    def images_path
      File.join assets_path, 'images'
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

    def rspec?
      defined?(::RSpec)
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

    def register_icons
      require 'shipyard-framework/icons'
    end

    def register_rails_engine
      require 'shipyard-framework/rails/engine'
      require 'shipyard-framework/rails/railtie'
    end

    def register_sprockets
      Sprockets.append_path(stylesheets_path)
      Sprockets.append_path(javascripts_path)
      Sprockets.append_path(images_path)
    end

    def register_jekyll_hooks
      require 'shipyard-framework/jekyll/hooks'
    end

    def register_jekyll_tags
      require 'shipyard-framework/jekyll/shipyard_variables'
      require 'shipyard-framework/jekyll/tags/button_tag'
      require 'shipyard-framework/jekyll/tags/icon_tag'
      require 'shipyard-framework/jekyll/tags/box_tag'
      require 'shipyard-framework/jekyll/tags/note_tag'
      require 'shipyard-framework/jekyll/tags/alert_tag'
      require 'shipyard-framework/jekyll/tags/shipyard_version_tag'
      require 'shipyard-framework/jekyll/shipyard_css_classes'
      Liquid::Template.register_tag('btn', Shipyard::Jekyll::Button)
      Liquid::Template.register_tag('icon', Shipyard::Jekyll::Icon)
      Liquid::Template.register_tag('box', Shipyard::Jekyll::Box)
      Liquid::Template.register_tag('note', Shipyard::Jekyll::Note)
      Liquid::Template.register_tag('alert', Shipyard::Jekyll::Alert)
      Liquid::Template.register_tag('shipyard_version', Shipyard::Jekyll::ShipyardVersion)
      Liquid::Template.register_tag('shipyard_css_classes', Shipyard::Jekyll::ShipyardCssClasses)
    end

    def register_helpers
      require 'shipyard-framework/helpers/alert_helper'
      require 'shipyard-framework/helpers/box_helper'
      require 'shipyard-framework/helpers/button_helper'
      require 'shipyard-framework/helpers/form_helper'
      require 'shipyard-framework/helpers/icon_helper'
      require 'shipyard-framework/helpers/layout_helper'
      require 'shipyard-framework/helpers/note_helper'
    end

    def load_icons
      $icons = Shipyard::Icons.new 'assets/icons/', 'tmp/assets/'
    end
  end
end

Shipyard.load!
