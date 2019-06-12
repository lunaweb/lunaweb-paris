// https://codepen.io/jh3y/pen/opNYWy
$(function() {
  'use strict';

  var debounce = function debounce(func, delay) {
    var inDebounce = void 0;
    return function () {
      var context = this;
      var args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(function () {
        return func.apply(context, args);
      }, delay);
    };
  };

  window.debounce = debounce;

  var throttle = function throttle(func, limit) {
    var inThrottle = void 0;
    var lastFunc = void 0;
    var lastRan = void 0;
    return function () {
      var context = this;
      var args = arguments;
      if (!inThrottle) {
        func.apply(context, args);
        lastRan = Date.now();
        inThrottle = true;
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  window.throttle = throttle;

});