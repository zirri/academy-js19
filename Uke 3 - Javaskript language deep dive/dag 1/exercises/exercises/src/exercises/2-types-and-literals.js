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
var REPLACE_ME = '...';

// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
testCase("Variables", {
  "Declared and initialized variables": function () {
    assert(a == REPLACE_ME, "Before declaration");

    var a = 42;

    assert(a == REPLACE_ME, "After declaration");
  }
});

// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String
testCase("Strings", {
  "typeof result": function () {
    var str = "Welcome to the world of tomorrow!";

    assert(typeof str == REPLACE_ME);
  },

  "Substrings (get a section of the string)": function () {
    var str = "Learning test-driven JavaScript";

    assert(REPLACE_ME == "test-driven");
  },

  "String length": function () {
    var str = "Test-driven development";

    assert(str.length == REPLACE_ME, "String length");
    assert(str[str.length] == REPLACE_ME, "What's at the index?");
  }
});

// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Boolean
testCase("Booleans", {
  "typeof result": function () {
    var bool = true;

    assert(!bool == REPLACE_ME, "==");
    assert(typeof bool == REPLACE_ME, "typeof");
  },

  "Converting to booleans": function () {
    var str1 = "A string";
    var str2 = "";

    assert(Boolean(str1) == REPLACE_ME, "str1");
    assert(Boolean(str2) == REPLACE_ME, "str2");
  }
});

// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number
testCase("Numbers", {
  "typeof result": function () {
    var num = 42;

    assert(typeof num == REPLACE_ME);
  },

  "Invalid division": function () {
    var num = 1 / 0;
    assert(num == REPLACE_ME, "1 / 0");

    num = 1 / "";
    assert(num == REPLACE_ME, '1 / ""'); // Bonus: Why?

    num = 1 / {};
    assert(num == REPLACE_ME, "1 / {} (ask if stuck!)");
    assert(typeof num == REPLACE_ME, "typeof result");
  },

  "Number conversion": function () {
    var str = "10";
    assert(Number(str) == REPLACE_ME, "Number(10)");

    str = "10.23";
    assert(Number(str) == REPLACE_ME, "Number(10.23)");

    str = "10.23";
    assert(parseInt(str) == REPLACE_ME, "parseInt(10.23)");

    str = "10.23";
    assert(parseFloat(str) == REPLACE_ME, "parseFloat(10.23)");
  }
});

// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math
testCase("Math", {
  "Rounding and PI": function () {
    var num = Math.floor(1337 * Math.PI) / 100;

    assert(num == REPLACE_ME);
  },

  "Modulus": function () {
    var num = 42 % 4;

    assert(num == REPLACE_ME);
  },

  "Modulus for array index": function () {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Without changing the loop itself, but only how we access the items;
    // Make sure we never go out of the array's bounds.
    // (Food for thought: What happens if we do go out of bounds?)
    var i = 100;

    while (i--) {
      assert(typeof arr[i] == "number");
    }
  }
});

testCase("Null", {
  "Equality and typeof": function () {
    var obj = null;

    assert(obj === REPLACE_ME, "===");
    assert(typeof obj == REPLACE_ME, "typeof");
  }
});

testCase("Undefined", {
  "Equality and typeof": function () {
    var obj;

    assert(obj == REPLACE_ME, "==");
    assert(typeof obj == REPLACE_ME, "typeof");
  }
});

// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array
testCase("Arrays", {
  "Array literals": function () {
    var arr = [1, 2, 3, 4, 5];

    assert(arr.length == REPLACE_ME, "length");
    assert(typeof arr == REPLACE_ME, "typeof");
  },

  "Arrays as strings": function () {
    var arr = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
    assert(arr.join("") == REPLACE_ME, "join('')");

    arr = [1, 2, 3];
    assert(arr.join(", ") == REPLACE_ME, "join(', ')");
  },

  "Array slices": function () {
    var arr = ("JavaScript").split("");

    assert(REPLACE_ME == "Script");
  },

  "Adding items": function () {
    var arr = [1, 2, 3, 4, 5];
    arr[2] = 0;

    assert(arr.join(", ") == REPLACE_ME);
  },

  "Deleting items": function () {
    var arr = [1, 2, 3, 4, 5];
    delete arr[2];

    assert(arr.length == REPLACE_ME, "length");
    assert(arr.join(", ") == REPLACE_ME, "join");
  },

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  "Replacing items": function () {
    var arr = [1, 2, 3, 4, 5];
    // Modify array to fit pass the assert below
    // Hint: Look up Array.prototype.splice

    assert(arr.join(", ") == "1, 2, 0, 0, 0, 4, 5");
  },

  "Array constructor": function () {
    var arr = new Array(1, 2, 3, 4, 5);
    assert(arr.join(", ") == REPLACE_ME, "First array");

    arr = Array(1, 2, 3, 4, 5);
    assert(arr.join(", ") == REPLACE_ME, "Second array");

    arr = Array(1, 5);
    assert(arr.join(", ") == REPLACE_ME, "Third array");

    arr = Array(5);
    assert(arr.join(", ") == REPLACE_ME, "Fourth array");
  },

  "Array item access": function () {
    var arr = [1, 2, 3, 4, 5];

    assert(REPLACE_ME == 4);
  }
});
