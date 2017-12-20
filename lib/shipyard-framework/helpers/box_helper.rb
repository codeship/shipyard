module Shipyard
  module BoxHelper
    include Crafty::HTML::Basic

    def box(types=[], content=nil, options={}, &block)
      types = [*types]
      content = capture(&block) if block_given?

      # Gather the appropriate box classes into an array.
      class_list = types.include?(:secondary) ? [] : ['box']
      types.each do |type|
        class_list << "box-#{type}"
      end

      # Join the CSS Classes together.
      options[:class] = class_list.join(' ')

      div(options) { content }
    end
  end
end
