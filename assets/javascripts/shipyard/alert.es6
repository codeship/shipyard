class Alert extends Shipyard {
  constructor (el) {
    super(el)
    this.on('click', () => { this.close() })
  }

  close () {
    this.addClass('alert-closed')
  }
}
