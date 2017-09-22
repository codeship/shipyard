module Shipyard
  module Jekyll
    class ShipyardCssClasses < Liquid::Tag
      def initialize(tag_name, params, options)
        super
      end

      def render(context)
        context['page']['path'].tr('/','-').gsub(/[\.][a-z]*/, '')
      end
    end
  end
end
