class Modal extends Shipyard {
  constructor (el) {
    super(el)
    this.on('open', () => { this.open() })
    this.on('click', '[modal-close]', () => { this.close() })
  }

  open () {
    this.removeClass('hidden')
    shipyard.addClass('modal-open')
  }

  close () {
    this.addClass('hidden')
    shipyard.removeClass('modal-open')
  }
}
