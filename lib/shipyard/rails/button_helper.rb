module Shipyard
  module Rails
    module ButtonHelper
      def btn(name, *args, &block)
        if block_given?
          args << name
          name = capture(&block)
        end

        # Save any options that were passed in.
        options = {}
        args.each do |arg|
          options = options.merge(arg) if arg.is_a?(Hash)
        end

        # Output the appropriate button.
        if options.key?(:href)
          link_to name, options[:href], btn_options(args, options)
        else
          content_tag :button, name, btn_options(args, options)
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
        options.except(:href)
      end
    end
  end
end
