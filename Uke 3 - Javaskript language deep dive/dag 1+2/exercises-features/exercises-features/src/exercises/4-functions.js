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
    function myFunc(){

    }


    assert(typeof myFunc == "function", "should be a function");
    assert(myFunc.length == 0, "should have no specified arguments");
    assert(myFunc.name == "myFunc", "should have correct name");
  },

  'Create a named function expression that takes 3 parameters': function() {
    // Fill in necessary statement(s) to pass the assertions below
    var myFunc = function myAwesomeFunction(a,b,c){

    }


    assert(typeof myFunc == "function", "should be a function");
    assert(myFunc.length == 3, "should have 3 specified arguments");
    assert(myFunc.name == "myAwesomeFunction", "should have the correct name");
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
                                        assert(a == 20, "1");
                                        assert(b == 10, "2");
                                        assert(c == 15, "3");
                                        /* .......... */

      function doSomethingElse() {
        var c = 30;

                                        /* assertions */
                                        assert(a == 20, "4");
                                        assert(b == 10, "5");
                                        assert(c == 30, "6");
                                        /* .......... */
      }

                                        /* assertions */
                                        assert(a == 20, "7");
                                        assert(b == 10, "8");
                                        assert(c == 15, "9");
                                        /* .......... */

      doSomethingElse();

                                        /* assertions */
                                        assert(a == 20, "10");
                                        assert(b == 10, "11");
                                        assert(c == 15, "12");
                                        /* .......... */
    }

                                        /* assertions */
                                        assert(a == 5, "13");
                                        assert(b == 10, "14");
                                        assert(c == 15, "15");
                                        /* .......... */

    doSomething();

                                        /* assertions */
                                        assert(a == 5, "16");
                                        assert(b == 10, "17");
                                        assert(c == 15, "18");
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
                                        assert(a == 20, "1");
                                        assert(b == 50, "2");
                                        assert(c == 15, "3");
                                        /* .......... */

      function doSomethingElse() {
        var c = 30;
        b = 100;

                                        /* assertions */
                                        assert(a == 20, "4");
                                        assert(b == 100, "5");
                                        assert(c == 30, "6");
                                        /* .......... */
      }

                                        /* assertions */
                                        assert(a == 20, "7");
                                        assert(b == 50, "8");
                                        assert(c == 15, "9");
                                        /* .......... */

      doSomethingElse();

      c = 300;

                                        /* assertions */
                                        assert(a == 20, "10");
                                        assert(b == 100, "11");
                                        assert(c == 300, "12");
                                        /* .......... */
    }

                                        /* assertions */
                                        assert(a == 5, "13");
                                        assert(b == 10, "14");
                                        assert(c == 15, "15");
                                        /* .......... */

    doSomething();

                                        /* assertions */
                                        assert(a == 5, "16");
                                        assert(b == 10, "17");
                                        assert(c == 300, "18");
                                        /* .......... */
  },
});
