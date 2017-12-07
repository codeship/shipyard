class TimedAlerts extends Shipyard {
  constructor (el) {
    super(el)
    this.on('click', this.show)
  }

  show (event, btn, doc) {
    event.preventDefault()
    btn.addClass('btn-disabled')
    new Shipyard(btn.attr('alert-trigger')).trigger('show')
  }
}

new TimedAlerts('[alert-trigger]')
