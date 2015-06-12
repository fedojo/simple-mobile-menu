define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.hasClass = hasClass;
  exports.addClass = addClass;
  exports.removeClass = removeClass;

  function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }

  function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += ' ' + cls;
  }

  function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      ele.className = ele.className.replace(reg, ' ');
    }
  }
});
