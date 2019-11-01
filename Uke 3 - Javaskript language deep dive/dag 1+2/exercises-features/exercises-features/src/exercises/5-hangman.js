/**
 * Dependencies
 */
var { createHangmanUI } = require('../lib/ui');

/**
 * Helper function that gives you
 * a random element from a list
 */
function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

/**
 * Helper function that masks a word
 * based on the characters you want to reveal
 *
 * Example:
 *
 * maskWord("javascript", ["j", "s", "v"])
 * => "j*v*s*****"
 */
function maskWord(wordToMask, toReveal) {
  var regexp = new RegExp("[^" + toReveal.join("") + "]", "gi");
  return wordToMask.replace(regexp, "*");
}

/**
 * Helper function to check if
 * the solution has been guessed
 *
 * guessedSolution("javascript", ["j", "a"])
 * => false
 *
 * guessedSolution("javascript", ["j", "a", "v", "s", "c", "r", "i", "p", "t"])
 * => true
 */
function guessedSolution(original, guesses) {
  return maskWord(original, guesses) == original;
}

//Helper function - get number of unique letters solution
function uniqueLetters(solution){
  solution = solution.split('');
  solution.sort();
  uniqueArray=[];
  for (var i=0;i<solution.length; i+){
    if()
  }

}


/**
 * Main game function
 */


function Hangman(ui, solution) {
  var uniqueLetters = uniqueLetters(solution);
  console.log(typeof uniqueLettersSolution)
  var guesses = [];
  var numberOfGuesses = 0;

  var self = this;

  this.render = function () {
    ui.update(maskWord(solution, guesses));
  };

  this.guess = function (letter) {
    console.log(numberOfGuesses++);
    guesses.push(letter);
    self.render();
    if (numberOfGuesses > 10) {
      ui.close("You lost!");
    }
    if (guessedSolution(solution, guesses)) {
      ui.close("You win!");
    }
  };

  this.start= function () {
    ui.onGuess(self.guess);
    self.render();
  };
};

/**
 * Create a new hangman UI that we'll use in the rendering
 */
var ui = createHangmanUI(document.getElementById("hangman"));

/**
 * An array of solutions to choose from
 */
var words = ["Porsche", "Mercedes", "Lamborghini", "Ferrari", "Volkswagen"];

/**
 * Start a new game
 */
var game = new Hangman(ui, getRandom(words));
game.start();
