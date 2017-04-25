require 'shipyard/rails/view_helpers'
require 'shipyard/rails/layout_helpers'

module Shipyard
  module Rails
    class Railtie < ::Rails::Railtie
      initializer 'shipyard.view_helpers' do
        ActionView::Base.send :include, ViewHelpers
        ActionView::Base.send :include, LayoutHelpers
      end
    end
  end
end
