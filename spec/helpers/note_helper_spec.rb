require 'spec_helper'

RSpec.describe Shipyard::NoteHelper, type: :helper do
  include Shipyard::NoteHelper

  it 'should return a default note' do
    expect(note nil, 'test').to match(
      %r{<div class="note">test</div>}
    )
  end

  it 'should return all note types' do
    %w(info success warning error).each do |type|
      expect(note(type, 'test')).to match(
        %r{<div class="note note-#{type}">test</div>}
      )
    end
  end
end
