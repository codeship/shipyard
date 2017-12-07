class Accordion extends Shipyard {
  constructor (el) {
    super(el)
    this.on('click', this.toggle)
  }

  toggle (event, el) {
    document.querySelector(el.getAttribute('accordion')).classList.toggle('accordion-closed')
  }
}
