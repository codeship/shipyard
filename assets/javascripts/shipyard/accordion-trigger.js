class AccordionTrigger extends Shipyard {
  constructor (el) {
    super(el)
    this.accordion = new Accordion(this.attr('accordion'))
    this.on('click', (e) => { this.accordion.trigger('toggle') })
  }
}
