module Shipyard
  module NoteHelper
    include ActionView::Context
    include ActionView::Helpers::TagHelper
    include ActionView::Helpers::TextHelper

    def note(type, content, options={})
      # Gather the appropriate box classes into an array.
      class_list = ['note']
      class_list << "note-#{type}" if type

      # Join the CSS Classes together.
      options[:class] = class_list.join(' ')

      # Return the HTML structure for the box.
      content_tag :div, content, options
    end
  end
end
