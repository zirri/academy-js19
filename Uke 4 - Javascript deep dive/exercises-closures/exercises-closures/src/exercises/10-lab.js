/**
 * Dependencies
 */
var { createHangmanUI } = require('../lib/ui');

/**
 * Provided functionality
 */
function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function maskWord(wordToMask, toReveal) {
  var regexp = new RegExp("[^" + toReveal.join("") + "]", "gi");
  return wordToMask.replace(regexp, "*");
}

function guessedSolution(original, guesses) {
  return maskWord(original, guesses) == original;
}

/**
 * Solution
 */
// function Hangman(ui, solution) {
//   var guesses = [];

//   this.render = function () {
//     ui.update(maskWord(solution, guesses));
//   };

//   this.guess = function (letter) {
//     guesses.push(letter);
//     this.render();

//     if (guessedSolution(solution, guesses)) {
//       ui.close("You win!");
//     }
//   };

//   ui.onGuess(this.guess.bind(this));
// }

// Hangman.prototype = {
//   start: function () {
//     this.render();
//   }
// };

function Hangman(ui, solution) {
  var guesses = [];
  
  var render = function () {
    ui.update(maskWord(solution, guesses));
  };

  var guess= function (letter) {
    guesses.push(letter);
    render();

    if (guessedSolution(solution, guesses)) {
      ui.close("You win!");
    }
  };

  ui.onGuess(guess);

  return {
    start: function () {render()},
  }
}
  

var ui = createHangmanUI(document.getElementById("hangman"));
var words = ["Porsche", "Mercedes", "Lamborghini", "Ferrari", "Volkswagen"];
var game = new Hangman(ui, getRandom(words));
game.start();
