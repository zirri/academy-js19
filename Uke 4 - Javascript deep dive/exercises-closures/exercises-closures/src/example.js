var {
  testCase,
  assert,
  assertEquals,
  asyncTest
} = require('./test-runner');

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

testCase('Variables', {
  'Sync test': function() {
    // Fill in necessary statement(s) to pass the assertions below
    var a = 23;

    assertEquals(a, 23);
  },

  'Another Sync test': function() {
    // Fill in necessary statement(s) to pass the assertions below
    var a = 23;

    assertEquals(a, 23);
  },

  'Async test (general)': function(done) {
    /**
     * Call this function at the end
     * of the implementation
     */
    function completed(err, result) {
      asyncTest(function() {
        assert(err == REPLACE_ME);
        assert(result == REPLACE_ME);
        assert(true);
      }, done);
    }

    /**
     * Do your implementation here
     */
    setTimeout(function() {
      completed(null, 'hello');
    }, 1000);
  },

  'Async test (callbacks)': function(done) {
    /**
     * Call this function at the end
     * of the implementation
     */
    function completed(err, result) {
      asyncTest(function() {
        assert(err == null);
        assert(result == 'hello world');
      }, done);
    }

    /**
     * Do your implementation here
     * (refactor this using async)
     */
     doAsyncThing('hello world', function(err, res) {
       if (err) {
         return completed(err);
       };

       doAsyncThing(res, function(err, res2) {
         if (err) {
           return completed(err);
         };

         doAsyncThing(res2, function(err, res3) {
           if (err) {
             return completed(err);
           };

           doAsyncThing(res3, function(err, res4) {
             if (err) {
               return completed(err);
             };

             doAsyncThing(res4, function(err, res5) {
               completed(err, res5);
             });
           });
         });
       });
     });
  },

  'Promise test': function(done) {
    /**
     * Call this function at the end
     * of the implementation
     */
    function completed(err, result) {
      if (err) {
        return done(err);
      }

      asyncTest(function() {
        assert(err == null);
        assert(result == 'hello world');
      }, done);
    }

    /**
     * Your implementation here
     */
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 100);
    });

    promise
      .then(() => {
        completed(new Error('The promise is expected to be rejected.'))
      })
      .catch(() => completed());

    /*
    setTimeout(function() {
      asyncTest(function() {
        assert(a === 24);
        assertEquals(a, 23);
        assert(a === 25);
      }, done);
    }, 2000);
    */
  },
});
