var md5 = require('md5');

function assert(expr, message) {
  if (!expr) {
    throw new Error(message || "Assertion failed!");
  }

  assert.count++;
  return true;
}

function asyncTest(assertions, done) {
  try {
    assertions();
  } catch (e) {
    done.error = e;
  } finally {
    done(done.error);
  }
}

assert.count = 0;

function assertEquals(expected, actual) {
  assert(
    expected == actual,
    "Expected '" + actual + "' to be equal to '" + expected + "'"
  );
}

function print(color, test, tagName) {
  var el = document.createElement(tagName || "p");
  el.id = md5(test);
  el.style.color = color;
  el.innerHTML = test;
  document.body.appendChild(el);
}

function replace(color, test, message) {
  var el = document.getElementById(md5(test));
  el.innerHTML = message;
  el.style.color = color;
}

function testCase(name, tests) {
  var greenShade = "#0c0";
  var redShade = "#c00";
  var blackShade = "#000";
  var yellowShade = "#DEE612";

  print(blackShade, name, "h2");

  for (var test in tests) {
    if (tests[test].length) {
      print(yellowShade, test);
      (function(test) {
        tests[test](function(e) {
          if (e) {
            replace(redShade, test, test + " failed: " + e.message);
          } else {
            replace(greenShade, test, test);
          }
        });
      }(test));
    } else {
      try {
        tests[test]();
        print(greenShade, test);
      } catch (e) {
        print(redShade, test + " failed: " + e.message);
      }
    }
  }
}

module.exports = {
  testCase,
  assert,
  assertEquals,
  asyncTest
};
