'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MobileMenu = (function () {
  function MobileMenu(el, configObj) {
    _classCallCheck(this, MobileMenu);

    this.$element = el;
    this.$a = this.$element.getElementsByTagName('a');
    this.configObj = configObj;

    this.parseConfig(configObj);
    this.checkMenuStatus();
    this.bindEvents();

    console.log('MobileMenu');
  }

  _createClass(MobileMenu, [{
    key: 'bindEvents',
    value: function bindEvents() {
      var $a = this.$element.getElementsByTagName('a');

      this.$element.addEventListener('click', this.clickHandler);
    }
  }, {
    key: 'checkMenuStatus',
    value: function checkMenuStatus() {
      console.log(this.getValue('mmarray'));
    }
  }, {
    key: 'parseConfig',
    value: function parseConfig(cfg) {
      console.log('Config');
      console.log(cfg);

      // TODO
    }
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

      var $target = e.target,
          $parent = $target.parentNode,
          $childUl = $parent.querySelector('ul');

      if ($childUl != null) {
        e.preventDefault();
        // this.clicksArray[0] = 0;
        console.log(this.clicksArray);
      } else {}
    }
  }]);

  return MobileMenu;
})();

//# sourceMappingURL=mobilemenu.js.map