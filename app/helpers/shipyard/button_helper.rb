module Shipyard
  module ButtonHelper
    include ActionView::Helpers::TagHelper

    def btn(text, *args, &block)
      if block_given?
        args << text
        text = capture(&block)
      end

      # Save any options that were passed in.
      options = {}
      args.each do |arg|
        options = options.merge(arg) if arg.is_a?(Hash)
      end

      # Output the appropriate button.
      if options.key?(:href)
        link_to text, options[:href], btn_options(args, options)
      else
        content_tag :button, text, btn_options(args, options)
      end
    end

    private

    def btn_options(args, options)
      options[:class] ||= ''
      options[:class] += ' btn'
      args.each do |arg|
        options[:class] += " btn-#{arg.to_s.tr('_', '-')}" if arg.is_a?(Symbol)
      end
      options[:class].strip!
      options
    end
  end
end
