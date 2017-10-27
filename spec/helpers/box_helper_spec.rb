require 'spec_helper'

RSpec.describe Shipyard::BoxHelper, type: :helper do
  include Shipyard::BoxHelper

  it 'should return a default box' do
    expect(box { 'test' }).to match(%r{<div class="box">test</div>})
  end

  it 'should return all box types' do
    types = %w(secondary padding link).map(&:to_sym)
    types.each do |type|
      if type == :secondary
        expect(box(type) { 'test' }).to match(%r{<div class="box-#{type}">test</div>})
      else
        expect(box(type) { 'test' }).to match(%r{<div class="box box-#{type}">test</div>})
      end
    end
  end

  it 'should return all box sizes' do
    sizes = %w(xxs xs sm md lg xl xxl).map(&:to_sym)
    sizes.each do |size|
      expect(box(size) { 'test' }).to match(%r{<div class="box box-#{size}">test</div>})
    end
  end
end
