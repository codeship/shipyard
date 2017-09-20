module Shipyard
  module FormHelper
    include ActionView::Context
    include ActionView::Helpers::FormTagHelper
    include ActionView::Helpers::FormOptionsHelper

    def input_text(name, value=nil, options={})
      options[:class] = "input input-text #{options[:class]}".strip
      text_field_tag name, value, options
    end

    def input_select_tag(name, choices, container_options={}, select_options={})
      container_options[:class] = "input-select-container #{container_options[:class]}".strip
      content_tag :div, container_options do
        select_options[:class] = "input input-select #{select_options[:class]}".strip
        choices = options_for_select(choices) if choices.is_a? Array
        select_tag name, choices, select_options
      end
    end
  end
end
