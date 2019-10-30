var jsc = require('./course');

function trigger(listeners, data) {
  for (var i = 0, l = listeners.length; i < l; ++i) {
    listeners[i](data);
  }
}

function setUpLetterGuess(form, listeners) {
  var input = form.getElementsByTagName("input")[0];
  input.value = "";

  jsc.addEventListener(input, "keyup", function () {
    trigger(listeners, this.value);
    this.value = "";
  });
  
  input.focus();
}

function createHangmanUI(root) {
  var h2 = root.getElementsByTagName("h2")[0];
  var forms = root.getElementsByTagName("form");
  var listeners = [];
  root.style.display = "block";

  var ui = {
    update: function (word) {
      h2.innerHTML = word.split("").map(function (c) {
        return "<span>" + c + "</span>";
      }).join("");
    },

    onGuess: function (callback) {
      listeners.push(callback);
    },

    close: function (message) {
      root.className = "win";
      var el = document.createElement("h3");
      el.innerHTML = message;

      root.insertBefore(el, h2.nextSibling);

      while (el.nextSibling) {
        root.removeChild(el.nextSibling);
      }

      setTimeout(function() {
        root.className += " won";
      }, 1000);
    }
  };

  setUpLetterGuess(forms[0], listeners);

  return ui;
}

module.exports = {
  createHangmanUI
};
