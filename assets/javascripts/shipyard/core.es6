class Shipyard {
  constructor (el, subClass) {
    if (subClass) {
      this.els = []
      document.querySelectorAll(el).forEach((el) => {
        this.els.push(new subClass(el))
      })
    } else if (typeof el === 'string') {
      this.el = document.querySelector(el)
    } else {
      this.el = el
    }
    return this
  }

  on (events, selector, callback) {
    if (typeof selector != 'string') callback = selector
    let objects = (typeof selector === 'string') ? this.find(selector) : [this]

    objects.forEach((obj) => {
      events.split(' ').forEach((eventName) => {
        obj.el.addEventListener(eventName, (e) => {
          callback(e, obj, this)
        })
      })
    })
    return this
  }

  trigger (events) {
    events.split(' ').forEach((eventName) => {
      this.el.dispatchEvent(new Event(eventName))
    })
    return this
  }

  find (selector) {
    let els = []
    this.el.querySelectorAll(selector).forEach((el) => {
      els.push(new Shipyard(el))
    })
    return els
  }

  css (property, value) {
    if (value) {
      this.el.style[property] = value
    } else {
      return window.getComputedStyle(this.el).getPropertyValue(property)
    }
  }

  attr (name) {
    return this.el.getAttribute(name)
  }

  addClass(className) {
    this.el.classList.add(className)
    return this
  }

  removeClass(className) {
    this.el.classList.remove(className)
    return this
  }

  toggleClass(className, condition) {
    this.el.classList.toggle(className, condition)
    return this
  }
}
