class AlertTimer extends Shipyard {
  constructor (el, alert) {
    super(el)
    this.alert = alert
    this.duration = this.data('duration')
    if (this.duration) this.css('animation-duration', `${this.duration}s`)
    this.on('start', () => { this.start() })
  }

  start () {
    setTimeout(() => { this.end() }, this.duration * 1000)
  }

  end () {
    this.alert.trigger('close')
  }
}
