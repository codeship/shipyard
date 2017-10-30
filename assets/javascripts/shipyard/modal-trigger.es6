class ModalTrigger extends Shipyard {
  constructor (el) {
    super(el)
    this.on('click', () => { this.open() })
    this.el.forEach((el) => {
      let modalName = el.getAttribute('modal-trigger')
      this.modal = new Modal(`[modal=${modalName}]`)
    })
  }

  open () {
    this.modal.open()
  }
}
