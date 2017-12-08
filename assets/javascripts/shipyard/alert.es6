class Alert extends Shipyard {
  constructor (el) {
    super(el)
    this.on('show', (e) => { this.show(e) })
    this.on('close', (e) => { this.close(e) })
    this.on('click', '[shipyard=alert-close]', (e) => { this.close(e) })

    // Initiate the Alert Timer if it exists.
    this.timer = this.child('.alert-timer')
    if (this.timer) this.timer = new AlertTimer(this.timer, this)
  }

  options(options) {
    this.on('afterClose', options.afterClose)
  }

  show (e) {
    this.options(e.detail)
    this.removeClass('alert-closed')
    if (this.timer) this.timer.trigger('start')
  }

  close (e) {
    e.preventDefault()
    this.addClass('alert-closed')
    this.trigger('afterClose')
  }
}
