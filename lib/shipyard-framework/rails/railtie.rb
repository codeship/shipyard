module Shipyard
  module Rails
    class Railtie < ::Rails::Railtie
      initializer 'shipyard.reload_cached_icons' do
        if ::Rails.env.development?
          ::Rails.application.reloaders << Shipyard::Icons.instance
          ::Rails.application.config.to_prepare { Shipyard::Icons.instance.execute_if_updated }
        end
      end
    end
  end
end
