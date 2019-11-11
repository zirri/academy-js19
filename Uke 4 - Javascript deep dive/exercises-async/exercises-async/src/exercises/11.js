/**
 * Dependencies
 */
const {
  testCase,
  assert,
  assertEquals,
  asyncTest
} = require('../lib/test-runner');

const Promise = require('bluebird');

/**
 * Provided functionality
 */
const {
  requestUrlWithError,
  requestUrl,
  readFile,
  censor,
  reverse,
  compress,
  encrypt,
} = require('../lib/course');

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
const REPLACE_ME = {
  then: function () { return REPLACE_ME; },
  catch: function () { return REPLACE_ME; }
};

/**
 * EXERCISES:
 */
testCase('The Promises Constructor', {
  'Rejecting a Promise (using constructor)': function (done) {
    /**
     * Assertions are
     * done here (DO NOT CHANGE)
     */
    function completed(err, result) {
      asyncTest(function () {
        assertEquals(err.message, 'rejected!', "Should be rejected with correct error");
      }, done);
    }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * Use the Promise constructor
     * to create a new Promise
     * and reject it at any time (setTimeout?)
     * with the correct Error (hint: the assertions)
     */

    const myPromise = new Promise(function(resolve, reject){
      reject(new Error('rejected!'));
    });


    /**
     * NO NEED TO CHANGE THIS
     */
    myPromise
    .then(function (value) {
      completed(null, value);
    })
    .catch(function (reason) {
      completed(reason);
    });
  },

  'Resolving a Promise (using constructor)': function (done) {
    /**
     * Assertions are
     * done here (DO NOT CHANGE)
     */
    function completed(err, result) {
      asyncTest(function () {
        assert(err == null, "Should not be rejected");
        assert(result == 10, "Should be resolved with correct value");
      }, done);
    }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * Use the Promise constructor
     * to create a new Promise
     * and resolve it at any time (setTimeout?)
     * to the correct value (hint: the assertions)
     *
     */

    const myPromise = new Promise(function(resolve, reject){
      resolve(10);
    });


    /**
     * NO NEED TO CHANGE THIS
     */
    myPromise
    .then(function (value) {
      completed(null, value);
    })
    .catch(function (reason) {
      completed(reason);
    });
  },
});

testCase('Using Asynchronous API\'s to resolve a promise', {
  'Using callback functions to create a promise (failing case)': function (done) {
    /**
     * Assertions are
     * done here (DO NOT CHANGE)
     */
    function completed(err, result) {
      asyncTest(function () {
        assert(err.message, "Should be rejected");
        assert(err.message == 'Something bad happened:0352179df0ea9b7eb6a2df5bc394c3d4', "Should request correct url");
      }, done);
    }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * Use the Promise constructor
     * to create a new Promise
     * and use the following API:
     *
     * - requestUrlWithError(url, callback) // (defaults to failing a request)
     *
     * where "callback" follows the convention
     *
     * - function(err, result) {...})
     *
     * to request the content of the url :
     *
     * - 'http://myapi.com/products/1'
     *
     * And then resolve or reject
     * the promise depending on
     * the API calling back with
     * an error or a result
     *
     * (Hint: check the slides)
     */
    const myPromise = new Promise(function(resolve, reject){
      requestUrlWithError('http://myapi.com/products/1', function(err, result){
        if(err){
          reject(err);
        }else{
          resolve(result);
        }
      })
    });


    /**
     * NO NEED TO CHANGE THIS
     */
    myPromise
    .then(function (value) {
      completed(null, value);
    })
    .catch(function (reason) {
      completed(reason);
    });
  },

  'Using callback functions to create a promise (succeeding case)': function (done) {
    /**
     * Assertions are
     * done here (DO NOT CHANGE)
     */
     function completed(err, result) {
       asyncTest(function() {
         assert(!err, "Should not be rejected");
         assert(result == '0352179df0ea9b7eb6a2df5bc394c3d4', "Should request correct url");
       }, done);
     }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * Use the Promise constructor
     * to create a new Promise
     * and use the following API:
     *
     * - requestUrl(url, callback) // (defaults to succeeding)
     *
     * where "callback" follows the convention
     *
     * - function(err, result) {...})
     *
     * to request the content of the url :
     *
     * - 'http://myapi.com/products/1'
     *
     * And then resolve or reject
     * the promise depending on
     * the API calling back with
     * an error or a result
     *
     * (Hint: check the slides)
     */
    
    const myPromise = new Promise(function(resolve, reject){
      var url='http://myapi.com/products/1';
      requestUrl(url, function(err, result){
        if(err){
          reject(err);
        }else{
          resolve(result);
        }
      })
    });


    /**
     * NO NEED TO CHANGE THIS
     */
    myPromise
    .then(function (value) {
      completed(null, value);
    })
    .catch(function (reason) {
      completed(reason);
    });
  },
});

testCase('Promises from values', {
  'Rejecting a Promise (directly)': function (done) {
    /**
     * Assertions are
     * done here (DO NOT CHANGE)
     */
    function completed(err, result) {
      asyncTest(function () {
        assert(err.message == 'A helpful error message', "Should be rejected with correct error (and message)");
        assert(result == null, "Should not be resolved with a value")
      }, done);
    }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * Use Promise.reject to
     * reject a promise directly
     */
    const promise = Promise.reject(new Error('A helpful error message'));


    /**
     * NO NEED TO CHANGE THIS
     */
    promise
    .then(function (value) {
      completed(null, value);
    })
    .catch(function (reason) {
      completed(reason);
    });
  },

  'Resolving a Promise (directly)': function (done) {
    /**
     * Assertions are
     * done here (DO NOT CHANGE)
     */
    function completed(err, result) {
      asyncTest(function () {
        assert(err == null, "Should not be rejected");
        assert(result == 1324, "Should be resolved with correct value");
      }, done);
    }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * Use Promise.resolve to
     * resolve a promise directly
     */

    const promise = Promise.resolve(1324);


    /**
     * NO NEED TO CHANGE THIS
     */
    promise
    .then(function (value) {
      completed(null, value);
    })
    .catch(function (reason) {
      completed(reason);
    });
  },

  'Rejecting a Promise (directly) and recovering from error': function (done) {
    /**
     * Assertions are
     * done here (DO NOT CHANGE)
     */
    function completed(err, result) {
      asyncTest(function () {
        assert(err == null, "Should not be rejected");
        assert(result == 'my recovered value', "Should be resolved/recovered with correct value")
      }, done);
    }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * Use Promise.reject to
     * reject a promise directly
     *
     * And
     *
     * Recover from the error
     * with correct value
     */

    const promise = Promise.reject(new Error('rejected!'));

    promise
    .then(function (value) {
      completed(null, value);
    })
    .catch(function (reason) {
      return 'my recovered value';      return 
    })
    .then(function (value) {
      completed(null, value);
    })
    .catch(function (reason) {
      completed(reason);
    })
  },
});

testCase('Converting callback API\'s to Promises', {
  'Convert the callback API to a Promise with Promise.promisify': function (done) {
    /**
     * Assertions are
     * done here (DO NOT CHANGE)
     */
    function completed(err, result) {
      asyncTest(function () {
        assert(!err, "Should not be rejected");
        assert(result == '0352179df0ea9b7eb6a2df5bc394c3d4', "Should request correct url and succeed")
      }, done);
    }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * Convert
     * - requestUrl(url, callback)
     *
     * To
     * - requestUrl(url) <- returns a promise
     *
     * And use that to make
     * the assertions run
     *
     * Request the url http://myapi.com/products/1
     */

    const myPromise = Promise.promisify(requestUrl)('http://myapi.com/products/1');


    /**
     * NO NEED TO CHANGE THIS
     */
    myPromise
    .then(function (value) {
      completed(null, value);
    })
    .catch(function (reason) {
      completed(reason);
    });
  }
});

testCase('Promise.all', {
  'Resolve multiple promises at once': function (done) {
    /**
     * Assertions are
     * done here (DO NOT CHANGE)
     */
    function completed(err, result) {
      asyncTest(function () {
        assert(!err, "Should not be rejected");
        assert((result || []).join(',') == '0352179df0ea9b7eb6a2df5bc394c3d4,9dd6fefdff47ca8337fa4a7ed756115d,140ea41224c1ef33f03a6f45498e0a95', "Should request correct urls")
      }, done);
    }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * The first part is the
     * same as the above
     * exercise (converting to Promises)
     *
     * --------------------------------------
     * Convert
     * - requestUrl(url, callback)
     *
     * To
     * - requestUrl(url) <- returns a promise
     * --------------------------------------
     *
     * Use Promise.all to perform
     * multiple requests simultaneously
     * to get the contents of
     *
     * 1. http://myapi.com/products/1
     * 2. http://myapi.com/products/2
     * 3. http://myapi.com/products/3
     *
     * Make the assertions succeed
     *
     * (Hint: Look at the slides)
     */
    var requestUrlAsync = Promise.promisify(requestUrl);

    const myPromise = Promise.all([
      requestUrlAsync('http://myapi.com/products/1'),
      requestUrlAsync('http://myapi.com/products/2'),
      requestUrlAsync('http://myapi.com/products/3')
    ]);


    /**
     * NO NEED TO CHANGE THIS
     */
    myPromise
    .then(function (values) {
      completed(null, values);
    })
    .catch(function (reason) {
      completed(reason);
    });
  }
});

testCase('Promise.race', {
  'Resolve a promise or time out (times out)': function (done) {
    /**
     * Assertions are
     * done here (DO NOT CHANGE)
     */
    function completed(err, result) {
      asyncTest(function () {
        assert(err.message == 'Timed out', "Should be rejected with correct reason");
        assert(result == null, "Should not be resolved with a value")
      }, done);
    }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * The first part is the
     * same as the above
     * exercise (converting to Promises)
     *
     * --------------------------------------
     * Convert
     * - requestUrl(url, callback)
     *
     * To
     * - requestUrl(url) <- returns a promise
     * --------------------------------------
     *
     * Use Promise.race to perform
     * a request that times out
     * after 1 second (which fails the request)
     *
     * To the url: http://myapi.com/products/1
     *
     * Make the assertions succeed
     *
     * (Hint: Look at the slides)
     */

    const myPromise = Promise.race([
      Promise.promisify(requestUrl)('http://myapi.com/products/1'),
      new Promise(function(resolved, rejected){
        setTimeout(function(){
          rejected(new Error('Timed out'));
        },1000)
      })
    ]);


    /**
     * NO NEED TO CHANGE THIS
     */
    myPromise
    .then(function (value) {
      completed(null, value);
    })
    .catch(function (reason) {
      completed(reason);
    });
  },

  'Resolve a promise or time out (succeeds)': function (done) {
    /**
     * Assertions are
     * done here (DO NOT CHANGE)
     */
    function completed(err, result) {
      asyncTest(function () {
        assert(!err, "Should not be rejected");
        assert(result == '0352179df0ea9b7eb6a2df5bc394c3d4', "Should not be resolved with a value")
      }, done);
    }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * The first part is the
     * same as the above
     * exercise (converting to Promises)
     *
     * --------------------------------------
     * Convert
     * - requestUrl(url, callback)
     *
     * To
     * - requestUrl(url) <- returns a promise
     * --------------------------------------
     *
     * Use Promise.race to perform
     * a request that times out
     * after 3 second (which makes the request succeed - as it takes 2 seconds)
     *
     * To the url: http://myapi.com/products/1
     *
     * Make the assertions succeed
     *
     * (Hint: Look at the slides)
     */

    const myPromise = Promise.race([
      Promise.promisify(requestUrl)('http://myapi.com/products/1'),
      new Promise(function(resolved, rejected){
        setTimeout(function () {
          rejected(new Error('Timed out'))
        },3000);
      })   
    ]);


    /**
     * NO NEED TO CHANGE THIS
     */
    myPromise
    .then(function (value) {
      completed(null, value);
    })
    .catch(function (reason) {
      completed(reason);
    });
  }
});

testCase('Refactoring', {
  'Refactor to use Promises': function (done) {
    /**
     * Assertions are
     * done here (DO NOT CHANGE)
     */
    function completed(err, result) {
      asyncTest(function () {
        assert(!err);
        assert(result == '-c-_-4-_-e', "Should be processed correctly (in the same order)");
      }, done);
    }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * Refactor this using Promises
     *
     * (Hint: See the slides)
     */

    /*
    readFile('superfile.txt', function (err, res) {
      if (err) {
        return completed(err);
      };

      censor(res, function (err, res2) {
        if (err) {
          return completed(err);
        };

        reverse(res2, function (err, res3) {
          if (err) {
            return completed(err);
          };

          compress(res3, function (err, res4) {
            if (err) {
              return completed(err);
            };

            encrypt(res4, function (err, res5) {
              completed(err, res5);
            });
          });
        });
      });
    });
    */

   Promise.promisify(readFile)('superfile.txt')
   .then(function(res){
      return Promise.promisify(censor)(res);
   })
   .then(function(res2){
      return Promise.promisify(reverse)(res2);
   })
   .then(function(res3){
    return Promise.promisify(compress)(res3);
   })
   .then(function(res4){
    return Promise.promisify(encrypt)(res4);
   })
   .then(function(res5){
    return completed(null, res5);
   })
   .catch(function(err){
    return completed(err);
   });
  },

  'Refactor to use async / await': function (done) {
    /**
     * Assertions are
     * done here (DO NOT CHANGE)
     */
     function completed(err, result) {
       asyncTest(function () {
         assert(!err);
         assert(result == '-c-_-4-_-e', "Should be processed correctly (in the same order)");
       }, done);
     }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * Refactor this using the async / await
     *
     * (Hint: See the slides)
     */

    /*
    readFile('superfile.txt', function (err, res) {
      if (err) {
        return completed(err);
      };

      censor(res, function (err, res2) {
        if (err) {
          return completed(err);
        };

        reverse(res2, function (err, res3) {
          if (err) {
            return completed(err);
          };

          compress(res3, function (err, res4) {
            if (err) {
              return completed(err);
            };

            encrypt(res4, function (err, res5) {
              completed(err, res5);
            });
          });
        });
      });
    });
    */

    readFile('superfile.txt', function (err, res) {
      if (err) {
        return completed(err);
      };

      censor(res, function (err, res2) {
        if (err) {
          return completed(err);
        };

        reverse(res2, function (err, res3) {
          if (err) {
            return completed(err);
          };

          compress(res3, function (err, res4) {
            if (err) {
              return completed(err);
            };

            encrypt(res4, function (err, res5) {
              completed(err, res5);
            });
          });
        });
      });
    });
  },
});
