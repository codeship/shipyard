module Shipyard
  module Rails
    class Engine < ::Rails::Engine
      initializer 'shipyard-framework.assets.precompile' do |app|
        %w(stylesheets javascripts images icons).each do |sub|
          app.config.assets.paths << root.join('assets', sub).to_s
        end
      end
    end
  end
end
