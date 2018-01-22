module Shipyard
  module Jekyll
    class ShipyardCssClasses < Liquid::Tag
      def initialize(tag_name, params, options)
        super
      end

      def render(context)
        cssClasses = []
        cssClasses << "env-#{context['site']['env']}"
        cssClasses << 'scroll-top'
        cssClasses << context['page']['layout_classes']
        cssClasses << context['page']['path'].tr('/','-').gsub(/[\.][a-z]*/, '')
        cssClasses.join ' '
      end
    end
  end
end
