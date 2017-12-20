require 'spec_helper'

RSpec.describe Shipyard::ButtonHelper, type: :helper do
  include Shipyard::ButtonHelper

  it 'should return a default button' do
    expect(btn('Save')).to match(%r{<button class="btn">Save</button>})
  end

  it 'should return all other button types' do
    %w(primary secondary disabled cta caution inverse inverse-secondary).each do |type|
      expect(btn('Save', type.to_sym)).to match(%r{<button class="btn btn-#{type}">Save</button>})
    end
  end

  it 'should return a linked button' do
    expect(btn('Save', href: '#')).to match(%r{<a href="#" role="button" class="btn">Save</a>})
  end

  it 'should return a button with a custom data attribute' do
    expect(btn('Save', 'data-btn-type' => 'save')).to match(%r{<button data-btn-type="save" class="btn">Save</button>})
  end

  it 'should return a button with a custom CSS class' do
    expect(btn('Save', class: 'shipyard-cta')).to match(%r{<button class="shipyard-cta btn">Save</button>})
  end

  it 'should return all button sizes' do
    %w(xxs xs sm md lg xl).each do |size|
      expect(btn('Save', size.to_sym)).to match(%r{<button class="btn btn-#{size}">Save</button>})
    end
  end

  it 'should return a responsive button' do
    expect(btn('Save', :xs, :x1_md)).to match(%r{<button class="btn btn-xs btn-x1-md">Save</button>})
  end
end
