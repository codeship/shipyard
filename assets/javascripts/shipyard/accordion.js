class Accordion extends Shipyard {
  constructor (el) {
    super(el)
    this.on('toggle', () => { this.toggle() })
  }

  toggle () {
    this.toggleClass('accordion-closed')
  }
}
