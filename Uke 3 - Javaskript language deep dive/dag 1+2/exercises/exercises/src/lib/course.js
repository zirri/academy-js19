module.exports = {
  addEventListener: function (el, event, handler) {
    if (el.addEventListener) {
      el.addEventListener(event, handler, false);
    } else if (el.attachEvent) {
      el.attachEvent(event, function () {
        handler.call(el, window.event);
      });
    }
  },
  extend: function() {
    var target = {};

    for (var i = 0, l = arguments.length; i < l; ++i) {
      for (var prop in arguments[i]) {
        target[prop] = arguments[i][prop];
      }
    }

    return target;
  }
};
