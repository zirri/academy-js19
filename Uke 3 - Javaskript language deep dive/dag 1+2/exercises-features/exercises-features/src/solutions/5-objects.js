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

testCase('Objects', {
  'Add speak method to object literal (singleton)': function() {
    // Fill in necessary statement(s) to pass the assertions below

    var person = {
      name: "Frank",
      likes: ['Cars', 'Flames', 'Guitars'],
      speak: function () {
        return 'Hi my name is ' + this.name;
      }
    };

    assert(person.speak() == 'Hi my name is Frank');
  },

  'Add speak method to instance constructor (this), create instance and call method': function() {
    // Fill in necessary statement(s) to pass the assertions below

    function Person(name) {
      this.name = name;

      this.speak = function () {
        return 'Hi my name is ' + this.name;
      };
    }

    var frank = new Person('Frank');

    assert(Person.prototype.isPrototypeOf(frank));
    assert(!Person.prototype.speak);
    assert(frank.name == "Frank");
    assert(frank.speak() == "Hi my name is Frank");
  },

  'Add speak method to prototype, create instance and call method': function() {
    function Person(name) {
      this.name = name;
    }

    // Fill in necessary statement(s) to pass the assertions below

    Person.prototype.speak = function () {
      return 'Hi my name is ' + this.name;
    };

    var frank = new Person('Frank');

    assert(Person.prototype.isPrototypeOf(frank));
    assert(typeof Person.prototype.speak == "function");
    assert(frank.name == "Frank");
    assert(frank.speak() == "Hi my name is Frank");
  },

  '(bonus) Change the name to be private state and add a speak method to the constructor': function() {
    // Fill in necessary statement(s) to pass the assertions below

    function Person(name) {
      this.speak = function () {
        return 'Hi my name is ' + name;
      };
    }

    var frank = new Person('Frank');

    assert(Person.prototype.isPrototypeOf(frank));
    assert(!Person.prototype.speak);
    assert(!frank.name);
    assert(frank.speak() == "Hi my name is Frank");
  },
});
