'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Shipyard = (function () {
  function Shipyard(el, subClass) {
    var _this = this;

    _classCallCheck(this, Shipyard);

    if (subClass) {
      this.els = [];
      document.querySelectorAll(el).forEach(function (el) {
        _this.els.push(new subClass(el));
      });
    } else if (typeof el === 'string') {
      this.el = document.querySelector(el);
    } else {
      this.el = el;
    }
    return this;
  }

  _createClass(Shipyard, [{
    key: 'on',
    value: function on(events, selector, callback) {
      if (typeof selector != 'string') callback = selector;
      var objects = typeof selector === 'string' ? this.find(selector) : [this];

      objects.forEach(function (obj) {
        events.split(' ').forEach(function (eventName) {
          obj.el.addEventListener(eventName, callback);
        });
      });
      return this;
    }
  }, {
    key: 'trigger',
    value: function trigger() {
      var _this2 = this,
          _arguments = arguments;

      var events = arguments[0];
      events.split(' ').forEach(function (eventName) {
        _this2.el.dispatchEvent(new CustomEvent(eventName, { detail: _arguments[1] }));
      });
      return this;
    }
  }, {
    key: 'find',
    value: function find(selector) {
      var els = [];
      this.el.querySelectorAll(selector).forEach(function (el) {
        els.push(new Shipyard(el));
      });
      return els;
    }
  }, {
    key: 'filter',
    value: function filter(selector) {
      var els = this.els.filter(function (obj) {
        return obj.el == document.querySelector(selector);
      });
      return els[0];
    }
  }, {
    key: 'child',
    value: function child(selector) {
      return this.el.querySelector(selector);
    }
  }, {
    key: 'data',
    value: function data(name) {
      return this.el.dataset[name];
    }
  }, {
    key: 'html',
    value: function html(value) {
      this.el.innerHTML = value;
      return this;
    }
  }, {
    key: 'css',
    value: function css(property, value) {
      if (value) {
        this.el.style[property] = value;
      } else {
        return window.getComputedStyle(this.el).getPropertyValue(property);
      }
    }
  }, {
    key: 'attr',
    value: function attr(name) {
      return this.el.getAttribute(name);
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.el.classList.add(className);
      return this;
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.el.classList.remove(className);
      return this;
    }
  }, {
    key: 'toggleClass',
    value: function toggleClass(className, condition) {
      this.el.classList.toggle(className, condition);
      return this;
    }
  }]);

  return Shipyard;
})();
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scroll = (function (_Shipyard) {
  _inherits(Scroll, _Shipyard);

  function Scroll(el) {
    _classCallCheck(this, Scroll);

    _get(Object.getPrototypeOf(Scroll.prototype), 'constructor', this).call(this, el);
    this.on('scroll resize', this.scroll).trigger('scroll');
  }

  _createClass(Scroll, [{
    key: 'scroll',
    value: function scroll() {
      shipyard.toggleClass('scrolling', window.pageYOffset > 0);
      shipyard.toggleClass('scroll-top', window.pageYOffset <= 0);
      shipyard.toggleClass('scroll-bottom', window.pageYOffset + window.innerHeight >= document.body.scrollHeight);
    }
  }]);

  return Scroll;
})(Shipyard);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hamburger = (function (_Shipyard) {
  _inherits(Hamburger, _Shipyard);

  function Hamburger(el) {
    _classCallCheck(this, Hamburger);

    _get(Object.getPrototypeOf(Hamburger.prototype), 'constructor', this).call(this, el);
    this.on('click', this.toggle);
  }

  _createClass(Hamburger, [{
    key: 'toggle',
    value: function toggle(e) {
      e.preventDefault();
      shipyard.toggleClass('hamburger-button-clicked');
    }
  }]);

  return Hamburger;
})(Shipyard);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = (function (_Shipyard) {
  _inherits(Alert, _Shipyard);

  function Alert(el) {
    var _this = this;

    _classCallCheck(this, Alert);

    _get(Object.getPrototypeOf(Alert.prototype), 'constructor', this).call(this, el);
    this.on('show', function (e) {
      _this.show(e);
    });
    this.on('close', function (e) {
      _this.close(e);
    });
    this.on('click', '[shipyard=alert-close]', function (e) {
      _this.close(e);
    });

    // Initiate the Alert Timer if it exists.
    this.timer = this.child('.alert-timer');
    if (this.timer) this.timer = new AlertTimer(this.timer, this);
  }

  _createClass(Alert, [{
    key: 'options',
    value: function options(_options) {
      this.on('afterClose', _options.afterClose);
    }
  }, {
    key: 'show',
    value: function show(e) {
      this.options(e.detail);
      this.removeClass('alert-closed');
      if (this.timer) this.timer.trigger('start');
    }
  }, {
    key: 'close',
    value: function close(e) {
      e.preventDefault();
      this.addClass('alert-closed');
      this.trigger('afterClose');
    }
  }]);

  return Alert;
})(Shipyard);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlertTimer = (function (_Shipyard) {
  _inherits(AlertTimer, _Shipyard);

  function AlertTimer(el, alert) {
    var _this = this;

    _classCallCheck(this, AlertTimer);

    _get(Object.getPrototypeOf(AlertTimer.prototype), 'constructor', this).call(this, el);
    this.alert = alert;
    this.duration = this.data('duration');
    if (this.duration) this.css('animation-duration', this.duration + 's');
    this.on('start', function () {
      _this.start();
    });
  }

  _createClass(AlertTimer, [{
    key: 'start',
    value: function start() {
      var _this2 = this;

      setTimeout(function () {
        _this2.end();
      }, this.duration * 1000);
    }
  }, {
    key: 'end',
    value: function end() {
      this.alert.trigger('close');
    }
  }]);

  return AlertTimer;
})(Shipyard);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = (function (_Shipyard) {
  _inherits(Accordion, _Shipyard);

  function Accordion(el) {
    var _this = this;

    _classCallCheck(this, Accordion);

    _get(Object.getPrototypeOf(Accordion.prototype), 'constructor', this).call(this, el);
    this.on('toggle', function () {
      _this.toggle();
    });
  }

  _createClass(Accordion, [{
    key: 'toggle',
    value: function toggle() {
      this.toggleClass('accordion-closed');
    }
  }]);

  return Accordion;
})(Shipyard);
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionTrigger = (function (_Shipyard) {
  _inherits(AccordionTrigger, _Shipyard);

  function AccordionTrigger(el) {
    var _this = this;

    _classCallCheck(this, AccordionTrigger);

    _get(Object.getPrototypeOf(AccordionTrigger.prototype), 'constructor', this).call(this, el);
    this.accordion = new Accordion(this.attr('accordion'));
    this.on('click', function (e) {
      _this.accordion.trigger('toggle');
    });
  }

  return AccordionTrigger;
})(Shipyard);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = (function (_Shipyard) {
  _inherits(Modal, _Shipyard);

  function Modal(el) {
    var _this = this;

    _classCallCheck(this, Modal);

    _get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).call(this, el);
    this.on('open', function () {
      _this.open();
    });
    this.on('click', '[modal-close]', function () {
      _this.close();
    });
  }

  _createClass(Modal, [{
    key: 'open',
    value: function open() {
      this.removeClass('display-none');
      shipyard.addClass('modal-open');
    }
  }, {
    key: 'close',
    value: function close() {
      this.addClass('display-none');
      shipyard.removeClass('modal-open');
    }
  }]);

  return Modal;
})(Shipyard);
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalTrigger = (function (_Shipyard) {
  _inherits(ModalTrigger, _Shipyard);

  function ModalTrigger(el) {
    var _this = this;

    _classCallCheck(this, ModalTrigger);

    _get(Object.getPrototypeOf(ModalTrigger.prototype), 'constructor', this).call(this, el);
    this.modal = new Modal('[modal=' + el.getAttribute('modal-trigger') + ']');
    this.on('click', function (e) {
      _this.modal.trigger('open');
    });
  }

  return ModalTrigger;
})(Shipyard);
'use strict';

var shipyard = new Shipyard(document.documentElement);
shipyard.windowScroll = new Scroll(window);
shipyard.hamburger = new Shipyard('[shipyard=hamburger]', Hamburger);
shipyard.alerts = new Shipyard('[shipyard=alert]', Alert);
shipyard.modalTriggers = new Shipyard('[modal-trigger]', ModalTrigger);
shipyard.accordionTriggers = new Shipyard('[accordion]', AccordionTrigger);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlertTrigger = (function (_Shipyard) {
  _inherits(AlertTrigger, _Shipyard);

  function AlertTrigger(el) {
    var _this = this;

    _classCallCheck(this, AlertTrigger);

    _get(Object.getPrototypeOf(AlertTrigger.prototype), 'constructor', this).call(this, el);
    this.alert = shipyard.alerts.filter(this.attr('alert-trigger'));
    this.on('click', function (e) {
      _this.click(e);
    });
  }

  _createClass(AlertTrigger, [{
    key: 'click',
    value: function click(e) {
      var _this2 = this;

      e.preventDefault();
      this.addClass('btn-loading');
      this.el.blur();
      this.alert.trigger('show', {
        afterClose: function afterClose() {
          _this2.reset();
        }
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.removeClass('btn-loading');
    }
  }]);

  return AlertTrigger;
})(Shipyard);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShadeColor = (function (_Shipyard) {
  _inherits(ShadeColor, _Shipyard);

  function ShadeColor(el) {
    _classCallCheck(this, ShadeColor);

    _get(Object.getPrototypeOf(ShadeColor.prototype), 'constructor', this).call(this, el);
    this.html(this.rgbToHex(this.css('background-color')));
  }

  _createClass(ShadeColor, [{
    key: 'rgbToHex',
    value: function rgbToHex(rgb) {
      if (rgb.match(/rgba/)) return '#';
      var hex = rgb.substr(4, rgb.indexOf(')') - 4).split(',').map(function (color) {
        return String('0' + parseInt(color).toString(16)).slice(-2);
      }).join('');
      return '#' + hex;
    }
  }]);

  return ShadeColor;
})(Shipyard);
'use strict';

shipyard.alertTriggers = new Shipyard('[alert-trigger]', AlertTrigger);
shipyard.colors = new Shipyard('[shade-color]', ShadeColor);
