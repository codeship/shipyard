class Shipyard {
  constructor (el) {
    this.el = document.querySelectorAll(el)
    this.html = document.documentElement
    return this
  }

  on (eventName, callback) {
    this.el.forEach((el) => {
      el.addEventListener(eventName, callback)
    })
  }
}
