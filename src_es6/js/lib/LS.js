define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setLS = setLS;
  exports.getLS = getLS;

  function setLS(name, value) {
    window.localStorage.setItem(name, value);
  }

  function getLS(name) {
    return window.localStorage.getItem(name);
  }
});
//# sourceMappingURL=LS.js.map