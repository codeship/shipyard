require 'spec_helper'

RSpec.describe Shipyard::IconHelper, type: :helper do
  include Shipyard::IconHelper

  xit 'should return an svg gear icon with the svg use tag.' do
    expect(icon(:gear)).to match(/<svg class="icon icon-gear icon-outline"(.+?)><use(.+?)>/)
  end

  xit 'should return an svg fear icon without the svg use tag.' do
    expect(icon('gear')).to match(/<svg class="icon icon-gear icon-outline"(.+?)>/)
  end

  xit 'should return an svg logo icon with a prefixed class name' do
    expect(icon(:gear, prefix: 'header')).to match(/<svg class="icon icon-gear icon-outline header-icon header-icon-gear" (.+?)><use(.+?)>/)
  end

  xit 'should return an svg logo icon with a custom CSS class' do
    expect(icon(:logo, class: 'shipyard-icon')).to match(/<svg class="icon icon-gear icon-outline shipyard-icon" (.+?)><use(.+?)>/)
  end
end
