require 'shipyard/rails/view_helpers'

module Shipyard
  module Rails
    class Railtie < ::Rails::Railtie
      initializer 'shipyard.view_helpers' do
        ActionView::Base.send :include, ViewHelpers
      end
    end
  end
end
