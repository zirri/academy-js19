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
 * YOUR IMPLEMENTATION HERE:
 */
const yahtzee = {
  roll: function () {
    var dice = [];
    for(var i =0; i<5; i++){
      dice.push(Math.ceil(Math.random()*6));
    };
    return dice;
  },

  hasPair: function (dice) {
    return max(values(frequencies(dice))) >= 2;
  },

  hasThreeAlike: function (dice) {
    return max(values(frequencies(dice))) >= 3;
  },

  hasFourAlike: function (dice) {
    return max(values(frequencies(dice))) >= 4;
  },

  hasHouse: function (dice){
    if(max(values(frequencies(dice)))==3 && values(frequencies(dice)).length==2){
      return true;
    }
    return false;
  },

  hasSmallStraight: function(dice){
    return values(frequencies(dice)).length==5 && max(dice)==5;
  },

  hasBigStraight: function(dice){
    return values(frequencies(dice)).length==5 && !frequencies(dice)['1']
    // dice.sort();
    // if("23456" == dice.join('')){
    //   return true;
    // };
    // return false;
  },

  hasYahtzee: function (dice) {
    return max(values(frequencies(dice))) == 5;
  },

  getPairs: function(dice){
    var freq = frequencies(dice);
    var pairs = [];
    for(var num in freq){
      if(freq[num] >=4){
        return[[num,num],[num,num]];
      }else if(freq[num] >=2){
        pairs.push([num,num]);
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
