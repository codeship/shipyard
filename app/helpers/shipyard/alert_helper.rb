module Shipyard
  module AlertHelper
    include ActionView::Context
    include ActionView::Helpers::TagHelper
    include ActionView::Helpers::TextHelper

    def flash_alert(*args, &block)
      alert_txt = capture(&block) if block_given?
      options = {}
      options[:role] ||= 'alert'
      options[:data] ||= {}
      options[:data][:shipyard] = 'alert'
      options['v-show'] = 'visible'
      class_list = ['alert']

      args.each do |arg|
        if arg.is_a? Symbol
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
        if defined? icon
          concat content_tag(
                  icon('x', class: 'alert-close-icon icon-outline-inverse center'),
                  svg_html,
                  class: 'alert-close v-center',
                  '@click': 'close'
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
