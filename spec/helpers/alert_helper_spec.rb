require 'spec_helper'

RSpec.describe Shipyard::AlertHelper, type: :helper do
  include Shipyard::AlertHelper

  it 'should return a default alert' do
    expect(flash_alert { 'test' }).to match(
      %r{<div role="alert" class="alert"><p class="alert-txt">test</p></div>}
    )
  end

  it 'should return a dismissable alert' do
    expect(flash_alert { 'test' }).to match(
      %r{<div role="alert" data-shipyard="alert" class="alert"><p class="alert-txt">test</p></div>}
    )
  end

  it 'should return all alert types' do
    %w(info success warning error).each do |type|
      expect(flash_alert(type.to_sym) { type }).to match(
        %r{<div role="alert" class="alert alert-#{type}"><p class="alert-txt">#{type}</p></div>}
      )
    end
  end
end
