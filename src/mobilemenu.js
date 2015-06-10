'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MobileMenu = (function () {
  // $element: {};
  // $a: {}};
  // configObj: {};

  function MobileMenu(el, configObj) {
    _classCallCheck(this, MobileMenu);

    this.$element = el;
    this.$a = this.$element.getElementsByTagName('a');
    this.configObj = configObj;

    this.parseConfig();
    this.bindEvents();

    console.log('MobileMenu');
  }

  _createClass(MobileMenu, [{
    key: 'bindEvents',
    value: function bindEvents() {
      var _this = this;

      var $a = this.$element.getElementsByTagName('a');
      console.log($a);

      for (var i = 0; i < $a.length - 1; i++) {
        $a[i].addEventListener('click', function (event) {
          return _this.clickHandler();
        });
      }
    }
  }, {
    key: 'parseConfig',
    value: function parseConfig() {}
  }, {
    key: 'setValue',
    value: function setValue(name, value) {
      window.localStorage.setItem(name, value);
    }
  }, {
    key: 'getValue',
    value: function getValue(name) {
      return window.localStorage.getItem(name);
    }
  }, {
    key: 'clickHandler',
    value: function clickHandler(e) {
      e.preventDefault();
      console.log('click');
    }
  }]);

  return MobileMenu;
})();

