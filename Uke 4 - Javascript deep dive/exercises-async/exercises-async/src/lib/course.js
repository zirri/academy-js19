var md5 = require('md5');

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
  },
  doAsyncThing: function(input, callback) {
    setTimeout(function() {
      callback(null, input);
    }, 100);
  },
  requestUrl: function(url, callback) {
    setTimeout(function() {
      callback(null, md5(url));
    }, 2000);
  },
  requestUrlWithError: function(url, callback) {
    setTimeout(function() {
      callback(new Error('Something bad happened:' + md5(url)));
    }, 1000);
  },
  readFile: function(path, callback) {
    setTimeout(function() {
      callback(null, md5(path));
    }, 100);
  },
  writeFile: function(path, content, callback) {
    setTimeout(function() {
      callback(null, md5(path + content))
    }, 100);
  },
  postToUrl: function(url, data, callback) {
    setTimeout(function() {
      callback(null, md5(url + data))
    }, 100);
  },
  censor: function(input, callback) {
    setTimeout(function() {
      callback(null, input.split('').join('_'))
    }, 100);
  },
  reverse: function(input, callback) {
    setTimeout(function() {
      callback(null, input.split('').join('-'))
    }, 100);
  },
  compress: function(input, callback) {
    setTimeout(function() {
      callback(null, input.slice(0, 10))
    }, 100);
  },
  encrypt: function(input, callback) {
    setTimeout(function() {
      callback(null, input.split('').reverse().join(''))
    }, 100);
  }
};
