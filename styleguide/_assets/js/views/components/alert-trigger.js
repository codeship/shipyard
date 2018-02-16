class AlertTrigger extends Shipyard {
  constructor (el) {
    super(el)
    this.alert = shipyard.alerts.filter(this.attr('alert-trigger'))
    this.on('click', (e) => { this.click(e) })
  }

  click (e) {
    e.preventDefault()
    this.addClass('btn-loading')
    this.el.blur()
    this.alert.trigger('show', {
      afterClose: () => { this.reset() }
    })
  }

  reset () {
    this.removeClass('btn-loading')
  }
}
