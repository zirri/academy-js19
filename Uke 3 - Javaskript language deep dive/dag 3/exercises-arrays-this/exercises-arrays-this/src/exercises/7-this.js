/**
 * Import test framework
 */
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

/**
 * Exercises
 */
testCase('The meaning of this', {
  'What is this?': function () {
    var person = {
      name: 'Frank',
      getThis: function () {
        return this;
      }
    };

    var getThis = person.getThis;

    var otherPerson = {
      name: 'Anna'
    };

    otherPerson.getThis = person.getThis;

    var completelyDifferentPerson = {
      name: 'Hank',
      getThat: getThis
    };

    /**
     * Assertions that should be fulfilled
     */
    assert(person.getThis() == person, "1");
    assert(getThis() == undefined, "2");
    assert(otherPerson.getThis() == otherPerson, "3");
    assert(completelyDifferentPerson.getThat() == completelyDifferentPerson, "4");
    assert(getThis.call(otherPerson) == otherPerson, "5");
    assert(otherPerson.getThis.call(person) == person, "6");
    assert(completelyDifferentPerson.getThat.call(otherPerson) == otherPerson, "7");
    assert(person.getThis.apply(otherPerson) == otherPerson, "8");
    assert(person.getThis.apply() == undefined, "9");
  },

  'Bindybind!': function () {
    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var person = {
      name: 'Frank',
      getThis: function () {
        return this;
      }
    };

    var frankGetThis = person.getThis.bind(person);

    var otherPerson = {
      name: 'Anna',
      getThis: frankGetThis
    };

    var annaGetThis = otherPerson.getThis.bind(otherPerson);

    /**
     * Assertions that should be fulfilled
     */
    assert(person.getThis() == person, "1");
    assert(frankGetThis() == person, "2");
    assert(otherPerson.getThis() == person, "3");
    assert(annaGetThis() == person, "4");
  },

  'Mapping assets (with an intermediate self/this)': function () {
    /**
     * Fill in necessary statement(s) to pass the assertions below
     */

    var person = {
      name: 'Hank Moody',
      assets: ['Porsche', 'Sigarette', 'Daughter'],
      mapAssets: function () {
        
        var self = this;

        return this.assets.map(function (asset) {
          return self.name + ' has a ' + asset;
        });
      }
    };

    /**
     * Assertions that should be fulfilled
     */
    assert(person.mapAssets()[0] == 'Hank Moody has a Porsche');
    assert(person.mapAssets()[1] == 'Hank Moody has a Sigarette');
    assert(person.mapAssets()[2] == 'Hank Moody has a Daughter');
  },

  'Mapping assets (with bind)': function () {
    /**
     * Fill in necessary statement(s) to pass the assertions below
     */

    var person = {
      name: 'Hank Moody',
      assets: ['Porsche', 'Sigarette', 'Daughter'],
      mapAssets: function () {
        /**
         * Here's where you need to make changes
         */
        return this.assets.map(function (asset) {
          return this.name + ' has a ' + asset;
        }.bind(this));
      }
    };

    /**
     * Assertions that should be fulfilled
     */
    assert(person.mapAssets()[0] == 'Hank Moody has a Porsche');
    assert(person.mapAssets()[1] == 'Hank Moody has a Sigarette');
    assert(person.mapAssets()[2] == 'Hank Moody has a Daughter');
  },

  'Remote execution (with bind)': function () {
    /**
     * Fill in necessary statement(s) to pass the assertions below
     */

    var person = {
      name: 'Hank Moody',
      assets: ['Porsche', 'Sigarette', 'Daughter'],
      mapAssets: function () {
        return this.assets.map(function (asset) {
          return this.name + ' has a ' + asset;
        }.bind(this));
      }
    };

    function remotelyExecute(func) {
      return func();
    }

    var mapAssets = person.mapAssets.bind(person);

    /**
     * Assertions that should be fulfilled
     */
    assert(remotelyExecute(mapAssets)[0] == 'Hank Moody has a Porsche');
    assert(remotelyExecute(mapAssets)[1] == 'Hank Moody has a Sigarette');
    assert(remotelyExecute(mapAssets)[2] == 'Hank Moody has a Daughter');
  },

  'Borrowing a function': function () {
    /**
     * Fill in necessary statement(s) to pass the assertions below
     */

    var person = {
      name: 'Hank Moody',
      assets: ['Porsche', 'Sigarette', 'Daughter'],
      mapAssets: function () {
        return this.assets.map(function (asset) {
          return this.name + ' has a ' + asset;
        }.bind(this));
      }
    };

    var otherPerson = {
      name: 'Vince Chase',
      assets: ['Girlfriend', 'Lot of cash', 'Manager']
    };

    otherPerson.mapAssets = person.mapAssets;

    /**
     * Assertions that should be fulfilled
     */
    assert(otherPerson.mapAssets()[0] == 'Vince Chase has a Girlfriend');
    assert(otherPerson.mapAssets()[1] == 'Vince Chase has a Lot of cash');
    assert(otherPerson.mapAssets()[2] == 'Vince Chase has a Manager');
  },

  'Borrowing a function (with call)': function () {
    /**
     * Fill in necessary statement(s) to pass the assertions below
     */

    var person = {
      name: 'Hank Moody',
      assets: ['Porsche', 'Sigarette', 'Daughter'],
      mapAssets: function () {
        return this.assets.map(function (asset) {
          return this.name + ' has a ' + asset;
        }.bind(this));
      }
    };

    var otherPerson = {
      name: 'Vince Chase',
      assets: ['Girlfriend', 'Lot of cash', 'Manager']
    };

    var mappedAssets = person.mapAssets.call(otherPerson);

    /**
     * Assertions that should be fulfilled
     */
    assert(mappedAssets[0] == 'Vince Chase has a Girlfriend');
    assert(mappedAssets[1] == 'Vince Chase has a Lot of cash');
    assert(mappedAssets[2] == 'Vince Chase has a Manager');
  },

  'Borrowing a function (with apply)': function () {
    /**
     * Fill in necessary statement(s) to pass the assertions below
     */

    var person = {
      name: 'Hank Moody',
      assets: ['Porsche', 'Sigarette', 'Daughter'],
      mapAssets: function () {
        return this.assets.map(function (asset) {
          return this.name + ' has a ' + asset;
        }.bind(this));
      }
    };

    var otherPerson = {
      name: 'Vince Chase',
      assets: ['Girlfriend', 'Lot of cash', 'Manager']
    };

    var mappedAssets = person.mapAssets.apply(otherPerson);

    /**
     * Assertions that should be fulfilled
     */
    assert(mappedAssets[0] == 'Vince Chase has a Girlfriend');
    assert(mappedAssets[1] == 'Vince Chase has a Lot of cash');
    assert(mappedAssets[2] == 'Vince Chase has a Manager');
  },
});
