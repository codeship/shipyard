class Scroll extends Shipyard {
  constructor (el) {
    super(el)
    this.on('scroll resize', this.scroll).trigger('scroll')
  }

  scroll () {
    shipyard.toggleClass('scrolling', window.pageYOffset > 0)
    shipyard.toggleClass('scroll-top', window.pageYOffset <= 0)
    shipyard.toggleClass('scroll-bottom', window.pageYOffset + window.innerHeight >= document.body.scrollHeight)
  }
}
