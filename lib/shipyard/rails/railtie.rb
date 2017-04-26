require 'shipyard/rails/layout_helpers'
require 'shipyard/rails/hero_helper'
require 'shipyard/rails/button_helper'
require 'shipyard/rails/alert_helper'

module Shipyard
  module Rails
    class Railtie < ::Rails::Railtie
      initializer 'shipyard.view_helpers' do
        ActionView::Base.send :include, LayoutHelpers
        ActionView::Base.send :include, HeroHelper
        ActionView::Base.send :include, ButtonHelper
        ActionView::Base.send :include, AlertHelper
      end
    end
  end
end
