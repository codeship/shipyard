module Shipyard
  module Jekyll
    class ShipyardVersion < Liquid::Tag
      def initialize(tag_name, params, options)
        super
      end

      def render(context)
        Shipyard::VERSION
      end
    end
  end
end
