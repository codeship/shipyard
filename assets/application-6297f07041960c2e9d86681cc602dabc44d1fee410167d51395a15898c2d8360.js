"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shipyard = (function () {
  function Shipyard(el) {
    _classCallCheck(this, Shipyard);

    this.el = document.querySelectorAll(el);
    this.html = document.documentElement;
    return this;
  }

  _createClass(Shipyard, [{
    key: "on",
    value: function on(eventName, callback) {
      this.el.forEach(function (el) {
        el.addEventListener(eventName, callback);
      });
    }
  }]);

  return Shipyard;
})();
'use strict';

Vue.component('icon', {
  template: '\n    <svg :class="iconClass" :viewBox="viewBox" preserveAspectRatio="xMinYMin meet" v-html="innerHtml"></svg>\n  ',

  props: {
    name: String,
    size: String, // {width}x{height} (e.g. 4x8, 8x8, 16x16)
    type: {
      'default': '',
      type: String
    },
    html: String
  },

  computed: {
    iconClass: function iconClass() {
      var cssClasses = [];
      cssClasses.push('icon');
      cssClasses.push('icon-' + this.name);
      if (this.type.length > 0) {
        this.type.trim().split(' ').forEach(function (type) {
          cssClasses.push('icon-' + type);
        });
      }
      return cssClasses;
    },

    viewBox: function viewBox() {
      return '0 0 ' + this.size.replace(/x/, ' ');
    },

    href: function href() {
      return '/assets/icons.svg#' + this.name;
    },

    innerHtml: function innerHtml() {
      if (this.html && this.name == 'queued') {
        return this.svgInnerHtml;
      } else {
        return '<use xlink:href="' + this.href + '"></use>';
      }
    },

    svgInnerHtml: function svgInnerHtml() {
      if (this.html) var html = this.html.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
      if (html) return html[1];
    }
  }
});
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

var shipyard = new Shipyard('html');
var hamburger = new Hamburger('[shipyard="hamburger"]');
'use strict';

$(document).ready(function () {
  if ($('html.utilities-colors').length > 0) {
    $.fn.backgroundColorHex = function () {
      var rgb = this.css('background-color');
      if (rgb.match(/rgba/)) return '#';
      var hex = rgb.substr(4, rgb.indexOf(')') - 4).split(',').map(function (color) {
        return String('0' + parseInt(color).toString(16)).slice(-2);
      }).join('');
      return '#' + hex;
    };

    $('.shade-color').each(function (index, shade) {
      $(shade).html($(shade).backgroundColorHex());
    });
  }
});
"use strict";
