require 'shipyard/rails/helpers/button_helper'

module Shipyard
  module Rails
    class Railtie < ::Rails::Railtie
      initializer 'shipyard.view_helpers' do
        ActionView::Base.send :include, ButtonHelper
      end
    end
  end
end
