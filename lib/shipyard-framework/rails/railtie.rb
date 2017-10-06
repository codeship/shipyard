module Shipyard
  module Rails
    class Railtie < ::Rails::Railtie
      initializer 'shipyard.reload_cached_icons' do
        # TODO: Use rake task or hook into asset pipeline instead?
        # rake shipyard:icons["#{::Rails.root}/app/assets/icons/", "#{::Rails.root}/public/assets"]
        $icons = Shipyard::Icons.new(
          "#{::Rails.root}/app/assets/icons/",
          "#{::Rails.root}/public/assets"
        )
        ::Rails.application.reloaders << $icons
      end
    end
  end
end
