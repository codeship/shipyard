module Shipyard
  module AlertHelper
    include Shipyard::IconHelper
    include ActionView::Context
    include ActionView::Helpers::TagHelper
    include ActionView::Helpers::TextHelper

    def flash_alert(*args, &block)
      alert_txt = capture(&block) if block_given?
      options = {}
      options[:role] ||= 'alert'
      class_list = ['alert']
      dismissable = false

      args.each do |arg|
        if arg == :dismissable
          dismissable = true
          options[:shipyard] = 'alert'
        elsif arg.is_a? Symbol
          class_list << "alert-#{alert_type(arg)}"
        elsif arg.is_a? Hash
          options = options.merge(arg) if arg.is_a?(Hash)
        else
          alert_txt = arg
        end
      end

      options[:class] = "#{class_list.join(' ')} #{options[:class]}".strip

      content_tag :div, options do
        concat content_tag(:p, raw(alert_txt), class: 'alert-txt')
        if dismissable
          concat content_tag(:button,
                   icon(:x, class: 'alert-close-icon icon-outline-inverse center'),
                   class: 'alert-close v-center',
                   shipyard: 'alert-close'
                 )
        end
      end
    end

    private

    def alert_type(type)
      case type.to_sym
      when :notice then :success
      when :alert then :error
      else type.to_s.tr('_', '-')
      end
    end
  end
end
