require_relative 'icon_helper'

module Shipyard
  module AlertHelper
    include Shipyard::IconHelper

    def flash_alert(*args, &block)
      alert_txt = capture(&block) if block_given?
      options = {}
      options[:role] ||= 'alert'
      class_list = ['alert']
      dismissible = false

      args.each do |arg|
        if arg == :dismissible
          dismissible = true
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

      div(options) do
        p({ class: 'alert-txt' }) { alert_txt }
        if dismissible
          button({ class: 'alert-close v-center', shipyard: 'alert-close'}) {
            icon(:x, class: 'alert-close-icon icon-outline-inverse center')
          }
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
