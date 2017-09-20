require 'spec_helper'

RSpec.describe Shipyard::IconHelper, type: :helper do
  include Shipyard::IconHelper

  it 'should return an svg logo icon with the svg use tag.' do
    expect(icon(:logo)).to match(/<svg class="icon icon-logo icon-outline"(.+?)><use(.+?)>/)
  end

  it 'should return an svg logo icon without the svg use tag.' do
    expect(icon('logo')).to match(/<svg class="icon icon-logo icon-outline"(.+?)><circle(.+?)>/)
  end

  it 'should return an svg logo icon with a prefixed class name' do
    expect(icon(:logo, prefix: 'header')).to match(/<svg class="icon icon-logo icon-outline header-icon header-icon-logo" (.+?)><use(.+?)>/)
  end

  it 'should return an svg logo icon with a custom class name' do
    expect(icon(:logo, class: 'codeship-logo')).to match(/<svg class="icon icon-logo icon-outline codeship-logo" (.+?)><use(.+?)>/)
  end
end
