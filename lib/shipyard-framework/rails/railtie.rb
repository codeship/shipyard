module Shipyard
  module Rails
    class Railtie < ::Rails::Railtie
      initializer 'shipyard.view_helpers' do
        ActionView::Base.send :include, AlertHelper
        ActionView::Base.send :include, BoxHelper
        ActionView::Base.send :include, ButtonHelper
        ActionView::Base.send :include, FormHelper
        ActionView::Base.send :include, IconHelper
        ActionView::Base.send :include, LayoutHelpers
        ActionView::Base.send :include, NoteHelper
      end

      initializer 'shipyard.reload_cached_icons' do
        # TODO: Use rake task or hook into asset pipeline instead?
        # rake shipyard:icons["#{::Rails.root}/app/assets/icons/", "#{::Rails.root}/public/assets"]
        $icons = Shipyard::Icons.new(
          "#{::Rails.root}/app/assets/icons/",
          "#{::Rails.root}/public/assets"
        )
        $icons.write
        ::Rails.application.reloaders << $icons
      end
    end
  end
end
