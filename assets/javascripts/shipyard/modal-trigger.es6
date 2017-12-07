class ModalTrigger extends Shipyard {
  constructor (el) {
    super(el)
    this.on('click', () => { this.open() })
    this.el.forEach((el) => {
      this.modal = new Modal(`[modal=${el.getAttribute('modal-trigger')}]`)
    })
  }

  open () {
    this.modal.open()
  }
}
