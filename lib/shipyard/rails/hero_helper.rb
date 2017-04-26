module Shipyard
  module Rails
    module HeroHelper
      def hero(options={}, &block)
        @hero_type = options[:class].try(:include?, 'playful') ? :playful : :default
        options[:class] = "hero #{options[:class]}".strip
        options[:data] = { hero: '' }
        content_tag :div, options do
          content_tag :div, capture(&block), class: 'hero-container container'
        end
      end
    end
  end
end
