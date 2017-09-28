class Scroll extends Shipyard {
  constructor (el) {
    super(el)
    this.on('scroll resize', () => { this.scroll() }).trigger('scroll')
  }

  scroll () {
    this.html.classList.toggle('scrolling', window.pageYOffset > 0)
    this.html.classList.toggle('scroll-top', window.pageYOffset <= 0)
    this.html.classList.toggle('scroll-bottom', window.pageYOffset + window.innerHeight >= document.body.scrollHeight)
  }
}
