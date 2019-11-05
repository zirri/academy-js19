/**
 * Import test framework
 */
var {
  testCase,
  assert,
  assertEquals
} = require('../lib/test-runner');

/**
 * Placeholder
 */
var REPLACE_ME = '...';

/**
 * DESCRIPTION:
 *
 * Replace all occurrences of 'REPLACE_ME' in the unit tests below to make them
 * all pass (they should be green).
 *
 * HINT:
 *
 * If you get stuck, you can replace assert(a == b) with assertEquals(b, a).
 * That way the error message in the browser will be more specific. However,
 * give it a try before you do this, as in most cases this will give you the
 * answer flat out.
 */

/**
 * Functionality provided
 *
 * The exercises themselves
 * are further down
 */
var human = {
  speak: function () {
    return this.name + " says hi!";
  },
  eat: function (food) {
    return food ?
      this.name + " eats " + food :
      this.name + " wants to eat but didn\'t get anything to eat!";
  }
}

var man = {
  haveFun: function () {
    return this.name + " goes camping with his buddies"
  }
}

var woman = {
  haveFun: function () {
    return this.name + " goes shopping with her girlfriends"
  }
}

var programmer = {
  work: function () {
    return this.name + " is programming..";
  },
  takeBreak: function () {
    return this.name + " reads some hackernews";
  }
}

var lawyer = {
  work: function () {
    return this.name + " says: you\'ve been served!";
  },
  takeBreak: function () {
    return this.name + " enjoys a cocktail";
  }
}

var athlete = {
  run: function () {
    return this.name + " runs a marathon";
  }
}

var rockstar = {
  playGuitar: function () {
    return this.name + " plays a sweet tune! 🎵"
  }
}

/**
 * EXERCISES:
 *
 * (Use Object.assign to extend objects)
 *
 * DOCS: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
testCase('Sharing behaviour (using Object.assign)', {
  'Frank - the human man': function () {
    // Fill in necessary statement(s) to pass the assertions below
    var justFrank = {
      name: 'Frank'
    };

    var frank = Object.assign({},justFrank,human,man);



    assert(frank !== justFrank);
    assert(frank.speak() == 'Frank says hi!');
    assert(frank.eat('a hamburger') == 'Frank eats a hamburger');
    assert(frank.eat() == 'Frank wants to eat but didn\'t get anything to eat!');
    assert(frank.haveFun() == 'Frank goes camping with his buddies');
  },

  'Anna - the human woman': function () {
    // Fill in necessary statement(s) to pass the assertions below
    var justAnna = {
      name: 'Anna'
    };

    var anna = Object.assign({},justAnna, human,woman);



    assert(anna !== justAnna);
    assert(anna.speak() == 'Anna says hi!');
    assert(anna.eat('a sandwich') == 'Anna eats a sandwich');
    assert(anna.eat() == 'Anna wants to eat but didn\'t get anything to eat!');
    assert(anna.haveFun() == 'Anna goes shopping with her girlfriends');
  },

  'Johnny - the human, man and programmer': function () {
    // Fill in necessary statement(s) to pass the assertions below
    var justJohnny = {
      name: 'Johnny'
    };

    var johnny = Object.assign({}, justJohnny, human, man, programmer);



    assert(johnny !== justJohnny);
    assert(johnny.speak() == 'Johnny says hi!');
    assert(johnny.eat('a sandwich') == 'Johnny eats a sandwich');
    assert(johnny.eat() == 'Johnny wants to eat but didn\'t get anything to eat!');
    assert(johnny.haveFun() == 'Johnny goes camping with his buddies');
    assert(johnny.work() == 'Johnny is programming..');
    assert(johnny.takeBreak() == 'Johnny reads some hackernews');
  },

  'Alex - the human, man, lawyer and athlete': function () {
    // Fill in necessary statement(s) to pass the assertions below
    var justAlex = {
      name: 'Alex'
    };

    var alex = Object.assign({},justAlex, human, man, lawyer,athlete);



    assert(alex !== justAlex);
    assert(alex.speak() == 'Alex says hi!');
    assert(alex.eat('a sandwich') == 'Alex eats a sandwich');
    assert(alex.eat() == 'Alex wants to eat but didn\'t get anything to eat!');
    assert(alex.haveFun() == 'Alex goes camping with his buddies');
    assert(alex.work() == 'Alex says: you\'ve been served!');
    assert(alex.takeBreak() == 'Alex enjoys a cocktail');
    assert(alex.run() == 'Alex runs a marathon');
  },

  'Bella - the human, woman, athlete and rockstar': function () {
    // Fill in necessary statement(s) to pass the assertions below
    var justBella = {
      name: 'Bella'
    };

    var bella = Object.assign({},justBella, human, woman, athlete, rockstar);



    assert(bella !== justBella);
    assert(bella.speak() == 'Bella says hi!');
    assert(bella.eat('a sandwich') == 'Bella eats a sandwich');
    assert(bella.eat() == 'Bella wants to eat but didn\'t get anything to eat!');
    assert(bella.haveFun() == 'Bella goes shopping with her girlfriends');
    assert(bella.run() == 'Bella runs a marathon');
    assert(bella.playGuitar() == 'Bella plays a sweet tune! 🎵')
  },

  'Bella - the human, woman, lawyer and programmer': () => {
    // Fill in necessary statement(s) to pass the assertions below
    var justBella = {
      name: 'Bella'
    };

    var bella = Object.assign({},justBella, human, woman, lawyer, programmer);

    assert(bella !== justBella);
    assert(bella.work() == "Bella is programming..");
    assert(bella.takeBreak() == "Bella reads some hackernews");
  },

  'Bella - the human, woman, programmer and lawyer': () => {
    // Fill in necessary statement(s) to pass the assertions below
    var justBella = {
      name: 'Bella'
    };

    var bella = Object.assign({}, justBella, human, woman, programmer, lawyer);

    assert(bella !== justBella);
    assert(bella.work() == 'Bella says: you\'ve been served!');
    assert(bella.takeBreak() == 'Bella enjoys a cocktail');
  },
});
