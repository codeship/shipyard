class Modal extends Shipyard {
  constructor (el) {
    super(el)
    this.on('open', () => { this.open() })
    this.on('click', '[modal-close]', () => { this.close() })
  }

  open () {
    this.removeClass('display-none')
    shipyard.addClass('modal-open')
  }

  close () {
    this.addClass('display-none')
    shipyard.removeClass('modal-open')
  }
}
