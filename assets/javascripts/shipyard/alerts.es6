class Alerts extends Shipyard {
  constructor (el) {
    super(el)
    this.el.forEach((el) => {
      el.querySelector('[shipyard="alert-close"]')
        .addEventListener('click', () => { this.close(el) })
    })
  }

  close (el) {
    el.classList.add('alert-closed')
  }
}
