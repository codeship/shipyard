class Alerts extends Shipyard {
  constructor (el) {
    super(el)
    this.el.forEach((el) => {
      this.on('click', () => { this.close(el) })
    })
  }

  close (el) {
    el.classList.add('alert-closed')
  }
}
