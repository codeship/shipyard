class Shipyard {
  constructor (el) {
    this.el = typeof el === 'string' ? document.querySelectorAll(el) : [el]
    this.html = document.documentElement
    return this
  }

  on (events, callback) {
    this.el.forEach((el) => {
      events.split(' ').forEach((eventName) => {
        el.addEventListener(eventName, callback)
      })
    })
    return this
  }

  trigger (events) {
    this.el.forEach((el) => {
      events.split(' ').forEach((eventName) => {
        el.dispatchEvent(new Event(eventName))
      })
    })
    return this
  }
}
