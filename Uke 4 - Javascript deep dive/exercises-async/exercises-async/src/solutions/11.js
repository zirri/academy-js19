/**
 * Dependencies
 */
const {
  testCase,
  assert,
  assertEquals,
  asyncTest
} = require('../lib/test-runner');

const async = require('async');
const Promise = require('bluebird');

/**
 * Provided functionality
 */
const {
  doAsyncThing,
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
  then: () =>  REPLACE_ME,
  catch: () => REPLACE_ME,
};

/**
 * Solutions:
 */
testCase('The Promises Constructor', {
  'Rejecting a Promise (using constructor)': (done) => {
    /**
     * Assertions are
     * done here
     */
    function completed(err, result) {
      asyncTest(() => {
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

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('rejected!'));
      }, 2000);
    });

    myPromise
    .then((value) => {
      completed(null, value);
    })
    .catch((reason) => {
      completed(reason);
    });
  },

  'Resolving a Promise (using constructor)': (done) => {
    /**
     * Assertions are
     * done here
     */
    function completed(err, result) {
      asyncTest(() => {
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

    const myPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(10);
      }, 1000);
    });

    myPromise
    .then((value) => {
      completed(null, value);
    })
    .catch((reason) => {
      completed(reason);
    });
  },
});

testCase('Using Asynchronous API\'s to resolve a promise', {
  'Using callback functions to create a promise (failing case)': (done) => {
    /**
     * Assertions are
     * done here
     */
    function completed(err, result) {
      asyncTest(() => {
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
    const myPromise = new Promise((resolve, reject) => {
      requestUrlWithError('http://myapi.com/products/1', (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    myPromise
    .then((value) => {
      completed(null, value);
    })
    .catch((reason) => {
      completed(reason);
    });
  },

  'Using callback functions to create a promise (succeeding case)': (done) => {
    /**
     * Assertions are
     * done here
     */
     function completed(err, result) {
       asyncTest(() => {
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

     const myPromise = new Promise((resolve, reject) => {
       requestUrl('http://myapi.com/products/1', (err, result) => {
         if (err) {
           reject(err);
         } else {
           resolve(result);
         }
       });
     });

    myPromise
    .then((value) => {
      completed(null, value);
    })
    .catch((reason) => {
      completed(reason);
    });
  },
});

testCase('Promises from values', {
  'Rejecting a Promise (directly)': (done) => {
    /**
     * Assertions are
     * done here
     */
    function completed(err, result) {
      asyncTest(() => {
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

    promise
      .then((value) => {
        completed(null, value);
      })
      .catch((reason) => {
        completed(reason);
      });
  },

  'Resolving a Promise (directly)': (done) => {
    /**
     * Assertions are
     * done here
     */
    function completed(err, result) {
      asyncTest(() => {
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

    promise
    .then((value) => {
      completed(null, value);
    })
    .catch((reason) => {
      completed(reason);
    });
  },

  'Rejecting a Promise (directly) and recovering from error': (done) => {
    /**
     * Assertions are
     * done here
     */
    function completed(err, result) {
      asyncTest(() => {
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
    .then((value) => {
      completed(null, value);
    })
    .catch((reason) => {
      return 'my recovered value';
    })
    .then((value) => {
      completed(null, value);
    })
    .catch((reason) => {
      completed(reason);
    })
  },
});

testCase('Converting callback API\'s to Promises', {
  'Convert the callback API to a Promise with Promise.promisify': (done) => {
    /**
     * Assertions are
     * done here
     */
    function completed(err, result) {
      asyncTest(() => {
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

    const requestUrlAsync = Promise.promisify(requestUrl);

    const myPromise = requestUrlAsync('http://myapi.com/products/1')

    myPromise
    .then((value) => {
      completed(null, value);
    })
    .catch((reason) => {
      completed(reason);
    });
  }
});

testCase('Promise.all', {
  'Resolve multiple promises at once': (done) => {
    /**
     * Assertions are
     * done here
     */
    function completed(err, result) {
      asyncTest(() => {
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

    const requestUrlAsync = Promise.promisify(requestUrl);

    const myPromise = Promise.all([
      requestUrlAsync('http://myapi.com/products/1'),
      requestUrlAsync('http://myapi.com/products/2'),
      requestUrlAsync('http://myapi.com/products/3')
    ]);

    myPromise
    .then((values) => {
      completed(null, values);
    })
    .catch((reason) => {
      completed(reason);
    });
  }
});

testCase('Promise.race', {
  'Resolve a promise or time out (times out)': (done) => {
    /**
     * Assertions are
     * done here
     */
    function completed(err, result) {
      asyncTest(() => {
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

    const requestUrlAsync = Promise.promisify(requestUrl);

    /*
    const timeoutAfterOneSecond = new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject(new Error('Timed out'));
      }, 1000);
    });
    */

    const myPromise = Promise.race([
      requestUrlAsync('http://myapi.com/products/1'),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Timed out'));
        }, 1000);
      })
    ]);

    myPromise
    .then((value) => {
      completed(null, value);
    })
    .catch((reason) => {
      completed(reason);
    });
  },

  'Resolve a promise or time out (succeeds)': (done) => {
    /**
     * Assertions are
     * done here
     */
    function completed(err, result) {
      asyncTest(() => {
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

    const requestUrlAsync = Promise.promisify(requestUrl);

    /*
    const timeoutAfterOneSecond = new Promise(function(resolve, reject) {
      setTimeout(function() {
        reject(new Error('Timed out'));
      }, 1000);
    });
    */

    const myPromise = Promise.race([
      requestUrlAsync('http://myapi.com/products/1'),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('Timed out'));
        }, 3000);
      })
    ]);

    myPromise
    .then((value) => {
      completed(null, value);
    })
    .catch((reason) => {
      completed(reason);
    });
  }
});

testCase('Refactoring', {
  'Refactor to use Promises': (done) => {
    /**
     * Assertions are
     * done here
     */
    function completed(err, result) {
      asyncTest(() => {
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
     */

    /*
    readFile('superfile.txt', function(err, res) {
      if (err) {
        return completed(err);
      };

      censor(res, function(err, res2) {
        if (err) {
          return completed(err);
        };

        reverse(res2, function(err, res3) {
          if (err) {
            return completed(err);
          };

          compress(res3, function(err, res4) {
            if (err) {
              return completed(err);
            };

            encrypt(res4, function(err, res5) {
              completed(err, res5);
            });
          });
        });
      });
    });
    */

     const readFileAsync = Promise.promisify(readFile);
     const censorAsync = Promise.promisify(censor);
     const reverseAsync = Promise.promisify(reverse);
     const compressAsync = Promise.promisify(compress);
     const encryptAsync = Promise.promisify(encrypt);

     readFileAsync('superfile.txt')
     .then((res) => {
       return censorAsync(res);
     })
     .then((res) => {
       return reverseAsync(res);
     })
     .then((res) => {
       return compressAsync(res);
     })
     .then((res) => {
       return encryptAsync(res);
     })
     .then((res) => {
       completed(null, res);
     })
     .catch((reason) => {
       completed(reason);
     });
  },

  'Refactor to use async / await': (done) => {
    /**
     * Assertions are
     * done here
     */
     function completed(err, result) {
       asyncTest(() => {
         assert(!err);
         assert(result == '-c-_-4-_-e', "Should be processed correctly (in the same order)");
       }, done);
     }

    /**
     * ------------------------
     * Your implementation here
     * ------------------------
     *
     * Refactor this using the async module
     */

    /*
    readFile('superfile.txt', function(err, res) {
      if (err) {
        return completed(err);
      };

      censor(res, function(err, res2) {
        if (err) {
          return completed(err);
        };

        reverse(res2, function(err, res3) {
          if (err) {
            return completed(err);
          };

          compress(res3, function(err, res4) {
            if (err) {
              return completed(err);
            };

            encrypt(res4, function(err, res5) {
              completed(err, res5);
            });
          });
        });
      });
    });
    */

    const readFileAsync = Promise.promisify(readFile);
    const censorAsync = Promise.promisify(censor);
    const reverseAsync = Promise.promisify(reverse);
    const compressAsync = Promise.promisify(compress);
    const encryptAsync = Promise.promisify(encrypt);

    (async function () {
      try {
        var res = await readFileAsync('superfile.txt');
        var res2 = await censorAsync(res);
        var res3 = await reverseAsync(res2);
        var res4 = await compressAsync(res3);
        var res5 = await encryptAsync(res4);
        completed(null, res5);
      } catch (err) {
        completed(err);
      }
    }());
  },
});
