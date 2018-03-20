require 'shipyard-framework/helpers/alert_helper'
require 'shipyard-framework/helpers/box_helper'
require 'shipyard-framework/helpers/form_helper'
require 'shipyard-framework/helpers/icon_helper'
require 'shipyard-framework/helpers/layout_helper'
require 'shipyard-framework/helpers/note_helper'

module Shipyard
  module Rails
    class Railtie < ::Rails::Railtie
      initializer 'shipyard.view_helpers' do
        ActionView::Base.send :include, Shipyard::AlertHelper
        ActionView::Base.send :include, Shipyard::BoxHelper
        ActionView::Base.send :include, Shipyard::FormHelper
        ActionView::Base.send :include, Shipyard::IconHelper
        ActionView::Base.send :include, Shipyard::LayoutHelper
        ActionView::Base.send :include, Shipyard::NoteHelper
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
