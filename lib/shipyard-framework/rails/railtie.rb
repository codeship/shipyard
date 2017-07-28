require 'shipyard-framework/rails/layout_helpers'
require 'shipyard-framework/rails/icon_helper'
require 'shipyard-framework/rails/button_helper'
require 'shipyard-framework/rails/alert_helper'

module Shipyard
  module Rails
    class Railtie < ::Rails::Railtie
      initializer 'shipyard.view_helpers' do
        ActionView::Base.send :include, LayoutHelpers
        ActionView::Base.send :include, IconHelper
        ActionView::Base.send :include, ButtonHelper
        ActionView::Base.send :include, AlertHelper
      end

      initializer 'shipyard.reload_cached_icons' do
        if ::Rails.env.development?
          ::Rails.application.reloaders << Shipyard::Icons.instance
          ::Rails.application.config.to_prepare { Shipyard::Icons.instance.execute_if_updated }
        end
      end
    end
  end
end
