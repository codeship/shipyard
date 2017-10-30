'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Shipyard = (function () {
  function Shipyard(el) {
    _classCallCheck(this, Shipyard);

    this.el = typeof el === 'string' ? document.querySelectorAll(el) : [el];
    this.html = document.documentElement;
    return this;
  }

  _createClass(Shipyard, [{
    key: 'on',
    value: function on(events, callback) {
      this.el.forEach(function (el) {
        events.split(' ').forEach(function (eventName) {
          el.addEventListener(eventName, callback);
        });
      });
      return this;
    }
  }, {
    key: 'trigger',
    value: function trigger(events) {
      this.el.forEach(function (el) {
        events.split(' ').forEach(function (eventName) {
          el.dispatchEvent(new Event(eventName));
        });
      });
      return this;
    }
  }, {
    key: 'css',
    value: function css(el, value) {
      return window.getComputedStyle(el).getPropertyValue(value);
    }
  }, {
    key: 'addClass',
    value: function addClass(className) {
      this.el.forEach(function (el) {
        el.classList.add(className);
      });
      return this;
    }
  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      this.el.forEach(function (el) {
        el.classList.remove(className);
      });
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
    var _this = this;

    _classCallCheck(this, Scroll);

    _get(Object.getPrototypeOf(Scroll.prototype), 'constructor', this).call(this, el);
    this.on('scroll resize', function () {
      _this.scroll();
    }).trigger('scroll');
  }

  _createClass(Scroll, [{
    key: 'scroll',
    value: function scroll() {
      this.html.classList.toggle('scrolling', window.pageYOffset > 0);
      this.html.classList.toggle('scroll-top', window.pageYOffset <= 0);
      this.html.classList.toggle('scroll-bottom', window.pageYOffset + window.innerHeight >= document.body.scrollHeight);
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
    var _this = this;

    _classCallCheck(this, Hamburger);

    _get(Object.getPrototypeOf(Hamburger.prototype), 'constructor', this).call(this, el);
    this.on('click', function () {
      _this.onClick();
    });
  }

  _createClass(Hamburger, [{
    key: 'onClick',
    value: function onClick() {
      this.html.classList.toggle('hamburger-button-clicked');
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
    this.el.forEach(function (el) {
      el.querySelector('[shipyard=alert-close]').addEventListener('click', function () {
        _this.close(el);
      });
    });
  }

  _createClass(Alert, [{
    key: 'close',
    value: function close(el) {
      el.classList.add('alert-closed');
    }
  }]);

  return Alert;
})(Shipyard);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = (function (_Shipyard) {
  _inherits(Modal, _Shipyard);

  function Modal(el) {
    _classCallCheck(this, Modal);

    _get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).call(this, el);
  }

  _createClass(Modal, [{
    key: 'open',
    value: function open() {
      var _this = this;

      this.removeClass('display-none');
      this.html.classList.add('modal-open');
      this.el.forEach(function (el) {
        el.querySelectorAll('[modal-close]').forEach(function (btn) {
          btn.addEventListener('click', function () {
            _this.close();
          });
        });
      });
    }
  }, {
    key: 'close',
    value: function close() {
      this.addClass('display-none');
      this.html.classList.remove('modal-open');
    }
  }]);

  return Modal;
})(Shipyard);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalTrigger = (function (_Shipyard) {
  _inherits(ModalTrigger, _Shipyard);

  function ModalTrigger(el) {
    var _this = this;

    _classCallCheck(this, ModalTrigger);

    _get(Object.getPrototypeOf(ModalTrigger.prototype), 'constructor', this).call(this, el);
    this.on('click', function () {
      _this.open();
    });
    this.el.forEach(function (el) {
      var modalName = el.getAttribute('modal-trigger');
      _this.modal = new Modal('[modal=' + modalName + ']');
    });
  }

  _createClass(ModalTrigger, [{
    key: 'open',
    value: function open() {
      this.modal.open();
    }
  }]);

  return ModalTrigger;
})(Shipyard);
'use strict';

var shipyard = new Shipyard('html');
var windowScroll = new Scroll(window);
var hamburger = new Hamburger('[shipyard=hamburger]');
var shipyardAlert = new Alert('[shipyard=alert]');
var modalTrigger = new ModalTrigger('[modal-trigger]');
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShadeList = (function (_Shipyard) {
  _inherits(ShadeList, _Shipyard);

  function ShadeList(el) {
    var _this = this;

    _classCallCheck(this, ShadeList);

    _get(Object.getPrototypeOf(ShadeList.prototype), 'constructor', this).call(this, el);

    this.el.forEach(function (list) {
      list.querySelectorAll('[shade-color]').forEach(function (shade) {
        shade.innerHTML = _this.rgbToHex(_this.css(shade, 'background-color'));
      });
    });
  }

  _createClass(ShadeList, [{
    key: 'rgbToHex',
    value: function rgbToHex(rgb) {
      if (rgb.match(/rgba/)) return '#';
      var hex = rgb.substr(4, rgb.indexOf(')') - 4).split(',').map(function (color) {
        return String('0' + parseInt(color).toString(16)).slice(-2);
      }).join('');
      return '#' + hex;
    }
  }]);

  return ShadeList;
})(Shipyard);

new ShadeList('[shade-list]');
"use strict";
