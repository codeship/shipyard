require 'spec_helper'
require_relative '../../app/helpers/shipyard/button_helper'

RSpec.describe Shipyard::ButtonHelper, type: :helper do
  describe 'btn helper' do
    it 'should return a default button' do
      expect(btn('Save')).to match(%r{<button class="btn">Save</button>})
    end

    it 'should return a primary button' do
      expect(btn('Save', :primary)).to match(%r{<button class="btn btn-primary">Save</button>})
    end

    it 'should return a secondary button' do
      expect(btn('Save', :secondary)).to match(%r{<button class="btn btn-secondary">Save</button>})
    end

    it 'should return a linked button' do
      expect(btn('Save', href: root_path)).to match(%r{<a class="btn" href="#{root_path}">Save</a>})
    end

    it 'should return a button with a data attribute' do
      expect(btn('Save', data: { btn_type: 'save' })).to match(%r{<button data-btn-type="save" class="btn">Save</button>})
    end

    it 'should return a x-small button' do
      expect(btn('Save', :xs)).to match(%r{<button class="btn btn-xs">Save</button>})
    end

    it 'should return a small button' do
      expect(btn('Save', :sm)).to match(%r{<button class="btn btn-sm">Save</button>})
    end

    it 'should return a medium button' do
      expect(btn('Save', :md)).to match(%r{<button class="btn btn-md">Save</button>})
    end

    it 'should return a large button' do
      expect(btn('Save', :lg)).to match(%r{<button class="btn btn-lg">Save</button>})
    end

    it 'should return a x-large button' do
      expect(btn('Save', :xl)).to match(%r{<button class="btn btn-xl">Save</button>})
    end

    it 'should return a responsive button' do
      expect(btn('Save', :xs, :x1_md)).to match(%r{<button class="btn btn-xs btn-x1-md">Save</button>})
    end
  end
end
