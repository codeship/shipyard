class ShadeList extends Shipyard {
  constructor (el) {
    super(el)

    this.el.forEach((list) => {
      list.querySelectorAll('[shade-color]').forEach((shade) => {
        shade.innerHTML = this.rgbToHex(this.css(shade, 'background-color'))
      })
    })
  }

  rgbToHex (rgb) {
    if (rgb.match(/rgba/)) return '#';
    let hex = rgb.substr(4, rgb.indexOf(')') - 4).split(',').map(
                (color) => String('0' + parseInt(color).toString(16)).slice(-2)
              ).join('');
    return `#${hex}`;
  }
}

new ShadeList('[shade-list]')
