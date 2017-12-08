class ModalTrigger extends Shipyard {
  constructor (el) {
    super(el)
    this.modal = new Modal(`[modal=${el.getAttribute('modal-trigger')}]`)
    this.on('click', (e) => { this.modal.trigger('open') })
  }
}
