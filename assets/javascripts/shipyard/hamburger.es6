class Hamburger extends Shipyard {
  constructor (el) {
    super(el)
    this.on('click', () => { this.onClick() })
  }

  onClick () {
    this.html.classList.toggle('hamburger-button-clicked')
  }
}
