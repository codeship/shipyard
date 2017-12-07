class TimedAlerts extends Shipyard {
  constructor (el) {
    super(el)
    this.on('click', this.show)
  }

  show (event, btn) {
    event.preventDefault()
    document.querySelector(btn.attr('alert-trigger')).classList.toggle('alert-closed')
  }
}

new TimedAlerts('[alert-trigger]')
