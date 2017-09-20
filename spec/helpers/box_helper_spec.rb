require 'spec_helper'

RSpec.describe Shipyard::BoxHelper, type: :helper do
  include Shipyard::BoxHelper

  xit 'should return a default box' do
    expect(box { 'test' }).to match(%r{<div class="box">test</div>})
  end

  it 'should return all box types' do
    %w(secondary padding link).each do |type|
      expect(box([type.to_sym], 'test')).to match(%r{<div class="box box-#{type}">test</div>})
    end
  end

  it 'should return all box sizes' do
    %w(xxs xs sm md lg xl).each do |size|
      expect(box([size.to_sym], 'test')).to match(%r{<div class="box box-#{size}">test</div>})
    end
  end
end
