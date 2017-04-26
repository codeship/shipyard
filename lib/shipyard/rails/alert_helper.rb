module Shipyard
  module Rails
    module AlertHelper
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
    end
  end
end
