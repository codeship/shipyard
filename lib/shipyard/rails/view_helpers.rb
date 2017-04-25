module Shipyard
  module Rails
    module ViewHelpers
      def hero(options={}, &block)
        @hero_type = options[:class].try(:include?, 'playful') ? :playful : :default
        options[:class] = "hero #{options[:class]}".strip
        options[:data] = { hero: '' }
        content_tag :div, options do
          content_tag :div, capture(&block), class: 'hero-container rjw-container'
        end
      end

      def flash_alert(*args, &block)
        alert_txt = capture(&block) if block_given?
        options = {}
        class_list = ['alert']

        args.each do |arg|
          if arg.is_a? Symbol
            class_list << "alert-#{arg.to_s.tr('_', '-')}"
          elsif arg.is_a? Hash
            options = options.merge(arg) if arg.is_a?(Hash)
          else
            alert_txt = arg
          end
        end

        options[:class] = "#{class_list.join(' ')} #{options[:class]}"

        content_tag :div, options do
          concat content_tag(:p, raw(alert_txt), class: 'alert-txt')
          concat content_tag(:button,
                             icon('x', class: 'alert-close-icon icon-outline-inverse center'),
                             class: 'alert-close v-center')
        end
      end

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
