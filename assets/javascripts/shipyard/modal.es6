class Modal extends Shipyard {
  constructor (el) {
    super(el)
  }

  open () {
    this.removeClass('display-none')
    this.html.classList.add('modal-open')
    this.el.forEach((el) => {
      el.querySelectorAll('[modal-close]').forEach((btn) => {
        btn.addEventListener('click', () => { this.close() })
      })
    })
  }

  close () {
    this.addClass('display-none')
    this.html.classList.remove('modal-open')
  }
}
