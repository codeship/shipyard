module Shipyard
  module BoxHelper
    include ActionView::Context
    include ActionView::Helpers::TagHelper
    include ActionView::Helpers::TextHelper

    def box(types, content)
      # Gather the appropriate box classes into an array.
      class_list = types.include?(:secondary) ? [] : ['box']
      types.each do |type|
        class_list << "box-#{type}"
      end

      # Join the CSS Classes together.
      options ||= {}
      options[:class] = class_list.join(' ')

      # Return the HTML structure for the box.
      content_tag :div, content, options
    end
  end
end
