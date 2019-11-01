/**
 * Import test framework
 */
var {
  testCase,
  assert,
  assertEquals
} = require('../lib/test-runner');

/**
 * Import sorting helper
 */
var sortBy = require('sort-by');

/**
 * DESCRIPTION:
 * Replace all occurrences of 'REPLACE_ME' in the unit tests below to make them
 * all pass (they should be green).
 *
 * HINT:
 * If you get stuck, you can replace assert(a == b) with assertEquals(b, a).
 * That way the error message in the browser will be more specific. However,
 * give it a try before you do this, as in most cases this will give you the
 * answer flat out.
 */
var REPLACE_ME = '...';

/**
 * PART 1
 */
testCase('Arrays 0 - People', {
  /**
   * DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   */
  'Performing side-effects (and mutation)': function () {
    /**
     * Use forEach to fill the squared numbers array
     */
    var numbers = [1, 2, 3, 4];

    var squared = [];

    numbers.forEach(function(num) {
      squared.push(num*num);
    });

    /**
     * Assertions (no need to touch these)
     */
    assert(numbers.length == 4);
    assert(numbers.join(', ') == [1, 2, 3, 4].join(', '));
    assert(squared.length == 4);
    assert(squared.join(', ') == [1, 4, 9, 16].join(', '));
  },

  /**
   * DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   */
  'Avoiding side-effects (and mutation)': function () {
    /**
     * Use map to perform the same task as above
     */
    var numbers = [1, 2, 3, 4];

    var squared = numbers.map(function(ele){
      return ele*ele
    });

    /**
     * Assertions (no need to touch these)
     */
    assert(numbers.length == 4);
    assert(numbers.join(', ') == [1, 2, 3, 4].join(', '));
    assert(squared.length == 4);
    assert(squared.join(', ') == [1, 4, 9, 16].join(', '));
  },

  /**
   * DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
   */
  'Reverse each of the words in the array': function () {
    var words = ['hello', 'goodbye', 'world'];

    var reversed = words.map(function (item){
      return item.split('').reverse().join('');
    });

    /**
     * Assertions (no need to touch these)
     */
    assert(words.length == 3);
    assert(words.join(', ') == ['hello', 'goodbye', 'world'].join(', '));
    assert(reversed.length == 3);
    assert(reversed.join(', ') == ['olleh', 'eybdoog', 'dlrow'].join(', '));
  },

  'Pick the names': function () {
    var people = [{
      name: 'Frank',
      age: 45
    }, {
      name: 'Hank',
      age: 40
    }, {
      name: 'Anna',
      age: 30
    }];

    var names = people.map(function(item){
      return item.name;
    });

    /**
     * Assertions (no need to touch these)
     */
    assert(names.length == 3);
    assert(names.join(', ') == ['Frank', 'Hank', 'Anna'].join(', '));
  },

  /**
   * DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   */
  'Filter and keep those younger than 35': function () {
    var people = [{
      name: 'Frank',
      age: 45
    }, {
      name: 'Anna',
      age: 30
    }, {
      name: 'Hank',
      age: 40
    }, {
      name: 'Bella',
      age: 25
    }];

    var youngerThan35 = people.filter(function(item){
      return item.age<35;
    });

    /**
     * Assertions (no need to touch these)
     */
    assert(youngerThan35.length == 2);
    assert(youngerThan35.map(function(a) { return a.age }).join(', ') == [30, 25].join(', '));
    assert(youngerThan35.map(function(a) { return a.name }).join(', ') == ['Anna', 'Bella'].join(', '));
  },

  /**
   * DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   */
  'Filter and keep those older than 35 and pick their names': function () {
    var people = [{
      name: 'Frank',
      age: 45
    }, {
      name: 'Anna',
      age: 30
    }, {
      name: 'Hank',
      age: 40
    }, {
      name: 'Bella',
      age: 25
    }];

    var olderThan35Names = (people
    .filter(function(item){
      return item.age>35;
    })
    .map(function (el){
      return el.name})
    );

    /**
     * Assertions (no need to touch these)
     */
    assert(olderThan35Names.length == 2);
    assert(olderThan35Names.join(', ') == ['Frank', 'Hank'].join(', '));
  },

  /**
   * DOCS: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   */
  'Find the sum of the array using reduce': function () {
    var numbers = [1, 2, 3, 4, 5];

    var sum = numbers.reduce(function (sum, item){
      return sum+item;
    },0);

    /**
     * Assertions (no need to touch these)
     */
    assert(sum == 15);
  },

  /**
   * Hint: Use a combination of all above (filter, map, reduce)
   */
  'Find the sum of the peoples ages for those younger than 35': function () {
    var people = [{
      name: 'Frank',
      age: 45
    }, {
      name: 'Anna',
      age: 30
    }, {
      name: 'Hank',
      age: 40
    }, {
      name: 'Bella',
      age: 25
    }];

    var ageSumOfyoungerThan35 = people
      .filter(item => item.age<35)
      .reduce((sum, item) => sum+item.age, 0);

    /**
     * Assertions (no need to touch these)
     */
    assert(ageSumOfyoungerThan35 == 55);
  },
});






/**
 * Data to use in the exercises below
 */
var flights = [
  { destination: 'San Francisco', price: 6000 },
  { destination: 'New York', price: 4000 },
  { destination: 'San Diego', price: 5500 },
  { destination: 'Los Angeles', price: 5100 },
];

/**
 * PART 2
 */
testCase('Arrays 1 - Flights', {
  'Map into destinations': function () {
    /**
     * Exercise 1:
     *
     * Map the flights into just an array of destinations
     * that looks like: ['San Francisco', 'New York', 'San Diego', 'Los Angeles']
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var destinations = flights.map(item => item.destination);

    /**
     * Assertions (no need to touch these)
     */
    assert(destinations.join(', ') == 'San Francisco, New York, San Diego, Los Angeles');
  },

  'Filter out (remove) those that cost less than 5k': function () {
    /**
     * Exercise 2:
     *
     * Filter the flights and keep only
     * the flights that cost more than 5000
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var costMoreThan5k = flights.filter(item => item.price >5000);

    /**
     * Assertions (no need to touch these)
     */
    assert(costMoreThan5k.length == 3);
    assert(costMoreThan5k.every(function(flight) { return flight.price > 5000 }));
  },

  'Sort flights by destination': function () {
    /**
     * Exercise 3:
     *
     * Sort the flights ascending by destination
     * using the npm package `sortBy`
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var flightsSortedByDestination = flights.sort(sortBy('destination'));

    /**
     * Assertions (no need to touch these)
     */
    assert(flightsSortedByDestination.length == 4);
    assert(flightsSortedByDestination[0].destination == "Los Angeles");
    assert(flightsSortedByDestination[1].destination == "New York");
    assert(flightsSortedByDestination[2].destination == "San Diego");
    assert(flightsSortedByDestination[3].destination == "San Francisco");
  },
});





/**
 * Data to use in the exercises below
 */
var todos = [
  { id: 'a', content: 'Do dishes', completed: true },
  { id: 'b', content: 'Buy the new Macbook', completed: true },
  { id: 'c', content: 'Learn functional programming', completed: false },
  { id: 'd', content: 'Find inner peace', completed: false },
  { id: 'e', content: 'Read that article about framework X that will save the world..', completed: false }
];

/**
 * PART 3
 */
testCase('Arrays 2 - Todos', {
  'Find the content of the completed tasks': function () {
    /**
     * Exercise 4:
     *
     * Produce an array that contains
     * the content of the completed
     * tasks using
     *
     * Hint: use .filter and .map
     *
     * result = ['Do dishes', 'Buy the new Macbook']
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var completedContent = todos
      .filter(item => item.completed==true)
      .map(element => element.content);

    /**
     * Assertions (no need to touch these)
     */
    assert(completedContent.length == 2);
    assert(completedContent.join(', ') == 'Do dishes, Buy the new Macbook');
  },

  'Sum of incomplete todos': function () {
    /**
     * Exercise 5:
     *
     * Find the sum of incompleted todos
     * using filter
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var sumIncompleteTodos = todos
      .filter(item => item.completed==false)
      .length;

    /**
     * Assertions (no need to touch these)
     */
    assert(sumIncompleteTodos == 3);
  },

  'Map array in to object with keys': function () {
    /**
     * Exercise 6:
     *
     * Produce an object mapping
     * of the todos where `id`
     * is the key using reduce
     *
     * EXPECTED RESULT:
     *
     * var todosByKey = {
     *   a: { id: 'a', content: 'Do dishes', completed: true },
     *   b: { id: 'b', content: 'Buy the new Macbook', completed: true },
     *   c: { id: 'c', content: 'Learn functional programming', completed: false },
     *   d: { id: 'd', content: 'Find inner peace', completed: false }
     *   e: { id: 'e', content: 'Read that article about framework X that will save the world..', completed: false }
     * };
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var todosByKey = todos.reduce(function (obj, item){
      obj[item.id]=item;
      return obj;
    },{});

    /**
     * Assertions (no need to touch these)
     */
    assert(!Array.isArray(todosByKey));
    assert(todosByKey['a'].content == "Do dishes");
    assert(todosByKey['b'].content == "Buy the new Macbook");
    assert(todosByKey['c'].content == "Learn functional programming");
    assert(todosByKey['d'].content == "Find inner peace");
    assert(todosByKey['e'].content == "Read that article about framework X that will save the world..");
  },
});




/**
 * Data to use in the exercises below
 */
var votes = [
  { id: 1, party: 'Piratpartiet' },
  { id: 2, party: 'AP' },
  { id: 3, party: 'Piratpartiet' },
  { id: 4, party: 'SV' },
  { id: 5, party: 'Piratpartiet' },
  { id: 6, party: 'MDG' },
  { id: 7, party: 'Høyre' },
  { id: 8, party: 'Frp' },
  { id: 9, party: 'MDG' },
  { id: 10, party: 'Høyre' }
];

/**
 * PART 4
 */
testCase('Arrays 3 - Election', {
  'Group votes by party': function () {
    /**
     * Exercise 7:
     *
     * Group the votes by `party`
     * and represent the votes
     * for each party as an array
     * if vote `id`s
     * by using reduce
     *
     * EXPECTED RESULT:
     *
     * var votesByParty = {
     *   'Piratpartiet': [1, 3, 5],
     *   'AP': [2],
     *   'SV': [4],
     *   'Frp': [8]
     *   'MDG': [6, 9],
     *   'Høyre': [7, 10]
     * }
     */

    /**
     * Fill in necessary statement(s) to pass the assertions below
     */
    var votesByParty = votes.reduce(function (obj, item){
      if(!obj[item.party]){
         obj[item.party] = [];
      }
      obj[item.party].push(item.id);
      return obj;
    }, {});

    /**
     * Assertions (no need to touch these)
     */
    assert(votesByParty['Piratpartiet'].length == 3);
    assert(votesByParty['AP'].length == 1);
    assert(votesByParty['SV'].length == 1);
    assert(votesByParty['Frp'].length == 1);
    assert(votesByParty['MDG'].length == 2);
    assert(votesByParty['Høyre'].length == 2);
  },
});
