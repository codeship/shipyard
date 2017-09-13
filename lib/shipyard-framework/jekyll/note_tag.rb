require_relative '../../../app/helpers/shipyard/note_helper'

module Shipyard
  module Jekyll
    class Note < Liquid::Block
      include Shipyard::NoteHelper

      def initialize(tag_name, type, options)
        super
        @type = type.tr(':','').to_sym unless type.blank?
      end

      def render(context)
        note @type, raw(super.strip)
      end
    end
  end
end
