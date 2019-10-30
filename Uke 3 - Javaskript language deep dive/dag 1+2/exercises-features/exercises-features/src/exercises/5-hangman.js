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

/**
 * Main game function
 */
function startGame(ui, solution) {
  var guesses = [];

  var render = function () {
    ui.update(maskWord(solution, guesses));
  };

  var guess = function (letter) {
    guesses.push(letter);
    render();
    if (guessedSolution(solution, guesses)) {
      ui.close("You win!");
    }
  };

  ui.onGuess(guess);
  render();
}

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
startGame(ui, getRandom(words));
