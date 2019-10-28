var {
  testCase,
  assert,
  assertEquals
} = require('../lib/test-runner');

/**
 * DESCRIPTION:
 * Replace all occurrences of 'REPLACE_ME' in the unit tests below to make them
 * all pass (they should be green).
 * HINT
 * If you get stuck, you can replace assert(a == b) with assertEquals(b, a).
 * That way the error message in the browser will be more specific. However,
 * give it a try before you do this, as in most cases this will give you the
 * answer flat out.
 */
var REPLACE_ME = "...";
var TRUE_OR_FALSE = "...";

testCase("Truthy and falsy values", {
  "Name all falsy values": function () {
    // Use each falsy value only once! :)
    assert(!REPLACE_ME);
    assert(!REPLACE_ME);
    assert(!REPLACE_ME);
    assert(!REPLACE_ME);
    assert(!REPLACE_ME);
    assert(!REPLACE_ME);
  },

  "Which branch is executed?": function () {
    var value, result;

    if (value) {
      result = true;
    } else {
      result = false;
    }

    assert(result == TRUE_OR_FALSE);
  },

  "Truth value of string zero": function () {
    var value = "0";

    assert(value == TRUE_OR_FALSE);
  },

  "Truth value of user input": function () {
    // You can find this input field at http://localhost:3000
    var el = document.getElementById("number-guess");
    var value = el.value;

    assert(value == TRUE_OR_FALSE);
  },

  "Falsy loop termination": function () {
    var result1 = [], result2 = [];
    var i = 5;

    while (--i) {
      result1.push(i);
    }

    i = 5;

    while (i--) {
      result2.push(i);
    }

    assert(result1.join(", ") == REPLACE_ME, "result1");
    assert(result2.join(", ") == REPLACE_ME, "result2");
  },

  "Using logical and on strings": function () {
    var name = "Eirik";
    var job = "Programmer";

    assert((name && job) == REPLACE_ME);
  },

  "Unary not operator and strings": function () {
    var name = "Eirik";

    assert(!name == REPLACE_ME);
  }
});

testCase("Equality", {
  "Comparing undefined": function () {
    var result = undefined == undefined;

    assert(result == TRUE_OR_FALSE);
  },

  "Comparing null": function () {
    var result = null == null;

    assert(result == TRUE_OR_FALSE);
  },

  "Comparing null with undefined": function () {
    var result1 = null == undefined;
    var result2 = undefined == null;

    assert(result1 == TRUE_OR_FALSE, "result1");
    assert(result2 == TRUE_OR_FALSE, "result2");
  },

  "Comparing NaN": function () {
    var result = NaN == NaN;

    assert(result == TRUE_OR_FALSE);
  },

  "Comparing arrays": function () {
    var arr1 = [1, 2, 3, 4, 5];
    var arr2 = [1, 2, 3, 4, 5];
    var compareToSelf = arr1 == arr1;
    var compareToOther = arr1 == arr2;

    assert(compareToSelf == TRUE_OR_FALSE, "compare to self");
    assert(compareToOther == TRUE_OR_FALSE, "compare to other");
  }
});

testCase("Coercion", {
  "Comparing strings and numbers": function () {
    var string = "3";
    var number = 3;
    var result = string == number;

    assert(result == TRUE_OR_FALSE);
  },

  "Comparing booleans to strings": function () {
    var bool = true;
    var string = "1";
    var result = bool == string;

    assert(result == TRUE_OR_FALSE);
  },

  "Boolean arithmetic": function () {
    var result = (true + true) * (true + true) + false;

    assert(result == REPLACE_ME);
  },

  "Comparing object to string": function () {
    var person = { name: "Eirik" };
    var string = "Eirik";
    var result = person == string;

    assert(result == TRUE_OR_FALSE);
  },

  "Comparing object to number": function () {
    var person = {
      name: "Eirik",

      toString: function () {
        return this.name;
      }
    };

    person.name = "42";
    var result = person == 42;

    assert(result == TRUE_OR_FALSE);
  },

  "Object's valueOf returns an object": function () {
    var person = {
      name: "Eirik",

      valueOf: function () {
        return new String(this.name);
      }
    };

    var result = person == "Eirik";

    assert(result == TRUE_OR_FALSE);
  }
});

testCase("Addition or concatenation?", {
  "Adding string and number": function () {
    var str = "42";
    var num = 42;

    assert(str + num == REPLACE_ME);
  },

  "Adding string and boolean": function () {
    var str = "42";
    var bool = true;

    assert(str + bool == REPLACE_ME);
  },

  "Adding number and boolean": function () {
    var number = 42;
    var bool = true;

    assert(number + bool == REPLACE_ME);
  },

  "Applying unary plus before addition/concatenation": function () {
    var string = "42";
    var number = 42;

    assert(+string + number == REPLACE_ME);
  }
});

testCase("Strict equality", {
  "Comparing numbers": function () {
    var result = 42 === 42;

    assert(result == TRUE_OR_FALSE);
  },

  "Comparing strings": function () {
    var result = "Eirik" === "Eirik";

    assert(result == TRUE_OR_FALSE);
  },

  "Comparing objects": function () {
    var object = { course: "JavaScript for Developers" };
    var result = object === { course: "JavaScript for Developers" };

    assert(result == TRUE_OR_FALSE, "result");
  }
});

testCase("Short-circuiting expressions", {
  "&&": function () {
    var lang = { name: "JavaScript" };
    var version = lang && lang.name && lang.version;

    assert(version == REPLACE_ME);
  },

  "||": function () {
    var lang = { name: "JavaScript", version: "1.8" };
    var version = lang && lang.version || "1.5";

    assert(version == REPLACE_ME);
  },

  "Greedy ||": function () {
    function addClassName(el, className) {
      if (!el || !el.className) {
        return;
      }

      el.className += " " + className;
    }

    var el = { className: "" };
    addClassName(el, "awesome");

    assertEquals(el.className, REPLACE_ME);
  },

  "Working addClassName": function () {
    function addClassName(el, className) {
      // Implement the function so the assertions pass
      // (You can use the previous exercises as your starting point)
    }

    var el = { className: "" };
    addClassName(el, "item");
    assertEquals(el.className, " item");

    var el2 = {};
    addClassName(el2, "line");
    assert(el2.className == null, "el2");
  }
});
