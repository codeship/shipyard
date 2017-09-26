$(document).ready(() => {
  $('[shipyard="hamburger"]').on('click', () => {
    $('html').toggleClass('hamburger-button-clicked')
  })

  if ($('html.utilities-colors').length > 0) {
    $.fn.backgroundColorHex = function(){
      let rgb = this.css('background-color');
      if (rgb.match(/rgba/)) return '#';
      let hex = rgb.substr(4, rgb.indexOf(')') - 4).split(',').map(
                  (color) => String('0' + parseInt(color).toString(16)).slice(-2)
                ).join('');
      return `#${hex}`;
    };

    $('.shade-color').each((index, shade) => {
      $(shade).html($(shade).backgroundColorHex())
    })
  }
})
