/**
 * Dependencies
 */
const {
  testCase,
  assert,
  assertEquals
} = require('../lib/test-runner');

/**
 * Provided functionality
 */
function frequencies(array) {
  const freqs = {};

  for (let i = 0; i < array.length; i++) {
    if (!freqs[array[i]]) {
      freqs[array[i]] = 0;
    }
    freqs[array[i]] += 1;
  }

  return freqs;
}

/**
 * Provided functionality
 */
function values(object) {
  const vals = [];

  for (let prop in object) {
    vals.push(object[prop]);
  }

  return vals;
}

/**
 * Provided functionality
 */
function max(array) {
  let localMax = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > localMax) {
      localMax = array[i];
    }
  }

  return localMax;
}

/**
 * General abstraction for checking the equality of two arrays
 */
function equals(list1, list2) {
  if (list1.length !== list2.length) {
    return false;
  }

  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }

  return true;
}

/**
 * SOLUTION:
 */
const yahtzee = {
  roll: function () {
    const dice = [];
    let diceCount = 5;
    while (diceCount--) {
      dice.push(Math.floor(Math.random() * 6) + 1);
    }
    return dice;
  },

  hasPair: function (dice) {
    return yahtzee.getPairs(dice).length > 0;
  },

  hasTwoPairs: function (dice) {
    return yahtzee.getPairs(dice).length > 1;
  },

  hasThreeAlike: function (dice) {
    return max(values(frequencies(dice))) >= 3;
  },

  hasFourAlike: function (dice) {
    return max(values(frequencies(dice))) >= 4;
  },

  hasHouse: function (dice) {
    return equals(values(frequencies(dice)).sort(), [2, 3]);
  },

  hasSmallStraight: function (dice) {
    return equals(dice.sort(), [1, 2, 3, 4, 5]);
  },

  hasBigStraight: function (dice) {
    return equals(dice.sort(), [2, 3, 4, 5, 6]);
  },

  hasYahtzee: function (dice) {
    return values(frequencies(dice)).length === 1;
  },

  getPairs: function (dice) {
    const freqs = frequencies(dice);
    const pairs = [];

    for (let die in freqs) {
      if (freqs[die] >= 4) {
        pairs.push([die, die]);
      }

      if (freqs[die] >= 2) {
        pairs.push([die, die]);
      }
    }

    return pairs;
  }
};

/**
 * Test cases
 */
testCase("Pairs", {
  "Returns true for pair": function () {
    assert(yahtzee.hasPair([1, 1, 2, 3, 4]));
  },

  "Returns true for more than two alike": function () {
    assert(yahtzee.hasPair([1, 1, 2, 1, 4]));
  },

  "Returns false for no pair": function () {
    assert(!yahtzee.hasPair([1, 5, 2, 3, 4]));
  }
});

testCase("Three alike", {
  "Returns false for pair": function () {
    assert(!yahtzee.hasThreeAlike([1, 1, 2, 3, 4]));
  },

  "Returns true for three alike": function () {
    assert(yahtzee.hasThreeAlike([1, 1, 2, 1, 4]));
  },

  "Returns true for more than three": function () {
    assert(yahtzee.hasThreeAlike([1, 1, 2, 1, 1]));
  }
});

testCase("Four alike", {
  "Returns false for three": function () {
    assert(!yahtzee.hasFourAlike([1, 1, 2, 1, 4]));
  },

  "Returns true for four alike": function () {
    assert(yahtzee.hasFourAlike([1, 1, 2, 1, 1]));
  },

  "Returns true for yahtzee": function () {
    assert(yahtzee.hasFourAlike([1, 1, 1, 1, 1]));
  }
});

testCase("Full house", {
  "Returns false for no house": function () {
    assert(!yahtzee.hasHouse([1, 1, 2, 1, 4]));
  },

  "Returns true for full house": function () {
    assert(yahtzee.hasHouse([1, 1, 3, 3, 3]));
  },

  "Returns false for yahtzee": function () {
    assert(!yahtzee.hasHouse([1, 1, 1, 1, 1]));
  }
});

testCase("Roll", {
  "Returns array of 5 random dice": function () {
    const roll1 = yahtzee.roll();
    const roll2 = yahtzee.roll();

    assertEquals(roll1.length, 5);
    assertEquals(roll2.length, 5);
    assert(roll1.join("") !== roll2.join(""));
  }
});

testCase("Small straight", {
  "Returns true for small straight": function () {
    assert(yahtzee.hasSmallStraight([1, 4, 2, 3, 5]));
  },

  "Returns false for big straight": function () {
    assert(!yahtzee.hasSmallStraight([2, 5, 3, 6, 4]));
  }
});

testCase("Big straight", {
  "Returns true for big straight": function () {
    assert(yahtzee.hasBigStraight([6, 4, 2, 3, 5]));
  },

  "Returns false for small straight": function () {
    assert(!yahtzee.hasBigStraight([2, 5, 3, 1, 4]));
  }
});

testCase("Yahtzee", {
  "Returns true for yahtzee": function () {
    assert(yahtzee.hasYahtzee([6, 6, 6, 6, 6]));
  },

  "Returns true for yahtzee in ones": function () {
    assert(yahtzee.hasYahtzee([1, 1, 1, 1, 1]));
  },

  "Returns false for small straight": function () {
    assert(!yahtzee.hasYahtzee([2, 5, 3, 1, 4]));
  }
});

testCase("getPairs", {
  "Returns empty array for no pair": function () {
    assertEquals(yahtzee.getPairs([1, 2, 3, 4, 5]).join(','), [].join(','));
  },

  "Returns only pair": function () {
    assertEquals(yahtzee.getPairs([1, 2, 1, 4, 5]).join(','), [[1, 1]].join(','));
  },

  "Returns only the pair": function () {
    assertEquals(yahtzee.getPairs([1, 2, 1, 4, 1]).join(','), [[1, 1]].join(','));
  },

  "Returns both pairs": function () {
    assertEquals(yahtzee.getPairs([1, 2, 4, 4, 1]).join(','), [[1, 1], [4, 4]].join(','));
  },

  "(bonus) Returns two equal pairs": function () {
    assertEquals(yahtzee.getPairs([1, 2, 1, 1, 1]).join(','), [[1, 1], [1, 1]].join(','));
  }
});
