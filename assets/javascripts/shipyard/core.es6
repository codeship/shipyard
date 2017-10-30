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

  css (el, value) {
    return window.getComputedStyle(el).getPropertyValue(value)
  }

  addClass(className) {
    this.el.forEach((el) => {
      el.classList.add(className)
    })
    return this
  }

  removeClass(className) {
    this.el.forEach((el) => {
      el.classList.remove(className)
    })
    return this
  }
}
