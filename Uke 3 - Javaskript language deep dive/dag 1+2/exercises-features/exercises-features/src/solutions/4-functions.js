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

testCase('Functions', {
  'Declare a function that takes no parameters': function() {
    // Fill in necessary statement(s) to pass the assertions below

    function myFunc() {

    }

    assert(typeof myFunc == "function");
    assert(myFunc.length == 0);
    assert(myFunc.name == "myFunc");
  },

  'Create a named function expression that takes 3 parameters': function() {
    // Fill in necessary statement(s) to pass the assertions below

    var myFunc = function myAwesomeFunction(a, b, c) {

    };

    assert(typeof myFunc == "function");
    assert(myFunc.length == 3);
    assert(myFunc.name == "myAwesomeFunction");
  },

  'Function scope 1': function() {
    // Fill in necessary statement(s) to pass the assertions below

    /**
     * For clarity/readability, the function
     * without the assertions is in the
     * comment below
     *
     *
     * var a = 5;
     * var b = 10;
     * var c = 15;
     *
     * function doSometing() {
     *   var a = 20;
     *
     *   function doSomethingElse() {
     *     var c = 30;
     *   }
     *
     *   doSomethingElse();
     * }
     *
     * doSomething();
     */

    var a = 5;
    var b = 10;
    var c = 15;

    function doSomething() {
      var a = 20;

      /* assertions */
      assert(a == 20);
      assert(b == 10);
      assert(c == 15);
      /* .......... */

      function doSomethingElse() {
        var c = 30;

        /* assertions */
        assert(a == 20);
        assert(b == 10);
        assert(c == 30);
        /* .......... */
      }

      /* assertions */
      assert(a == 20);
      assert(b == 10);
      assert(c == 15);
      /* .......... */

      doSomethingElse();

      /* assertions */
      assert(a == 20);
      assert(b == 10);
      assert(c == 15);
      /* .......... */
    }

    /* assertions */
    assert(a == 5);
    assert(b == 10);
    assert(c == 15);
    /* .......... */

    doSomething();

    /* assertions */
    assert(a == 5);
    assert(b == 10);
    assert(c == 15);
    /* .......... */
  },

  'Function scope 2': function() {
    // Fill in necessary statement(s) to pass the assertions below

    /**
     * For clarity/readability, the function
     * without the assertions is in the
     * comment below
     *
     *
     * var a = 5;
     * var b = 10;
     * var c = 15;
     *
     * function doSometing() {
     *   var a = 20;
     *   var b = 50;
     *
     *   function doSomethingElse() {
     *     var c = 30;
     *     b = 100;
     *   }
     *
     *   doSomethingElse();
     *
     *   c = 300;
     * }
     *
     * doSomething();
     */

    var a = 5;
    var b = 10;
    var c = 15;

    function doSomething() {
      var a = 20;
      var b = 50;

      /* assertions */
      assert(a == 20);
      assert(b == 50);
      assert(c == 15);
      /* .......... */

      function doSomethingElse() {
        var c = 30;
        b = 100;

        /* assertions */
        assert(a == 20);
        assert(b == 100);
        assert(c == 30);
        /* .......... */
      }

      /* assertions */
      assert(a == 20);
      assert(b == 50);
      assert(c == 15);
      /* .......... */

      doSomethingElse();

      c = 300;

      /* assertions */
      assert(a == 20);
      assert(b == 100);
      assert(c == 300);
      /* .......... */
    }

    /* assertions */
    assert(a == 5);
    assert(b == 10);
    assert(c == 15);
    /* .......... */

    doSomething();

    /* assertions */
    assert(a == 5);
    assert(b == 10);
    assert(c == 300);
    /* .......... */
  },
});
