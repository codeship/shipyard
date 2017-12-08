class Hamburger extends Shipyard {
  constructor (el) {
    super(el)
    this.on('click', this.toggle)
  }

  toggle (e) {
    e.preventDefault()
    shipyard.toggleClass('hamburger-button-clicked')
  }
}
