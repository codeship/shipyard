module Shipyard
  module Rails
    module ButtonHelper
      include ActionView::Helpers::TagHelper

      def btn(text, *args, &block)
        if block_given?
          args << text
          name = capture(&block)
        end

        # Save any options that were passed in.
        options = {}
        args.each do |arg|
          options = options.merge(arg) if arg.is_a?(Hash)
        end

        # Output the appropriate button.
        tag = options.key?(:href) ? :a : :button
        content_tag tag, text, btn_options(args, options)
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
end
