require 'shipyard-framework/helpers/note_helper'

module Shipyard
  module Jekyll
    class Note < Liquid::Block
      include Shipyard::NoteHelper

      def initialize(tag_name, type, options)
        super
        @type = type.tr(':','').to_sym unless type.blank?
      end

      def render(context)
        note @type, super.strip.html_safe
      end
    end
  end
end
