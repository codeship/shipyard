require 'spec_helper'

RSpec.describe Shipyard::FormHelper, type: :helper do
  include Shipyard::FormHelper

  it 'should return a text box' do
    expect(input_text(:organization, 'Shipyard')).to(
      match(%r{<input type="text" name="organization" id="organization" value="Shipyard" class="input input-text" />})
    )
  end

  it 'should return a select box' do
    expect(input_select_tag(:organization, %w(HTML CSS JavaScript))).to(
      match(%r{<div class="input-select-container"><select name="organization" id="organization" class="input input-select"><option value="HTML">HTML</option>\n<option value="CSS">CSS</option>\n<option value="JavaScript">JavaScript</option></select></div>})
    )
  end
end
