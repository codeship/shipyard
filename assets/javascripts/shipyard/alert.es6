class Alert extends Shipyard {
  constructor (el) {
    super(el)
    this.el.forEach((el) => {
      el.querySelector('[shipyard=alert-close]')
        .addEventListener('click', () => { this.close(el) })
    })
    this.on('show', this.show)
  }

  show (event, el) {
    el.removeClass('alert-closed')
    // update timed alert duration
  }

  close (el) {
    el.classList.add('alert-closed')
  }
}
