module Shipyard
  module NoteHelper
    def note(type, content, options={})
      # Gather the appropriate box classes into an array.
      class_list = ['note']
      class_list << "note-#{type}" if type

      # Join the CSS Classes together.
      options[:class] = class_list.join(' ')

      # Return the HTML structure for the box.
      div(options) { content }
      builder = Nokogiri::HTML::Builder.new do |doc|
        doc.div(options) {
          "test"
          # doc.span.bold {
          #   doc.text "Hello world"
          # }
        }
      end
      builder.to_html
    end
  end
end
