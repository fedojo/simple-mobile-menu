define(["exports", "lib/DOM", "lib/LS"], function (exports, _libDOM, _libLS) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var MobileMenu = (function () {

    // constructor() {
    function MobileMenu(el, configObj) {
      _classCallCheck(this, MobileMenu);

      this.$element = el;
      this.configObj = configObj;

      this.parseConfig(configObj);
      this.setActiveElements();
      this.bindEvents();
    }

    _createClass(MobileMenu, [{
      key: "bindEvents",
      value: function bindEvents() {
        var $a = this.$element.getElementsByTagName("a");

        this.$element.addEventListener("click", this.clickHandler);
      }
    }, {
      key: "setActiveElements",
      value: function setActiveElements() {
        this.clicksArray = window.localStorage.getItem("mmarray") ? JSON.parse(window.localStorage.getItem("mmarray")) : [];

        console.log(this.clicksArray);

        if (this.clicksArray) {
          this.clicksArray.map(function (el, index) {
            // this.$element.querySelector('ul > li')[index].className += "active";
            console.log("EL: " + el + " ind: " + index);
          });
        }
      }
    }, {
      key: "parseConfig",
      value: function parseConfig(cfg) {
        console.log("Config");
        console.log(cfg);

        // TODO
        var defaultCfg = {
          rememberStatus: "true"
        };

        this.configObj = cfg ? cfg : defaultCfg;
        console.log(this.configObj);
      }
    }, {
      key: "clickHandler",
      value: function clickHandler(e) {
        var $target = e.target,
            $parent = $target.parentNode,
            $childUl = $parent.querySelector("ul");

        if ($childUl != null) {
          e.preventDefault();
          // >IE10
          // if (typeof($parent.classList) != undefined) {
          // ($parent.classList.contains('active')) ? $parent.classList.remove('active') : $parent.classList.add('active');
          // }
          // else {
          $parent.className.split(" ").indexOf("active") > 0 ? _libDOM.removeClass($parent, "active") : _libDOM.addClass($parent, "active");
          // }
        } else {}
      }
    }]);

    return MobileMenu;
  })();

  exports.MobileMenu = MobileMenu;
});
//# sourceMappingURL=MobileMenu.js.map