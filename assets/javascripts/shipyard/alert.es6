class Alert extends Shipyard {
  constructor (el) {
    super(el)
    this.on('show', this.show)
    this.on('click', '[shipyard=alert-close]', (e) => { this.close(e) })

    // this.els.forEach((el) => {
    //   this.timer = this.find(el, '.alert-timer')
    //   console.log(this.timer)
    //   // this.css(this.timer, 'animation-duration', `${this.timer.dataset.duration}s`)
    //   // console.log(this.timer)
    // })
  }

  show (event) {
    this.removeClass('alert-closed')
  }

  close (e) {
    e.preventDefault()
    this.addClass('alert-closed')
  }
}
