module Shipyard
  module Rails
    class Engine < ::Rails::Engine
      initializer 'shipyard.assets.precompile', group: :all do |app|
        %w(stylesheets).each do |sub|
          app.config.assets.paths << root.join('assets', sub).to_s
        end
      end
    end
  end
end
