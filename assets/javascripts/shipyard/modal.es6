class Modal extends Shipyard {
  constructor (el) {
    super(el)
  }

  open () {
    this.removeClass('display-none')
    this.html.classList.add('modal-open')
    this.el.forEach((el) => {
      el.querySelector('[shipyard=modal-close]')
        .addEventListener('click', () => { this.close(el) })
    })
  }

  close (el) {
    this.addClass('display-none')
    this.html.classList.remove('modal-open')
  }
}
