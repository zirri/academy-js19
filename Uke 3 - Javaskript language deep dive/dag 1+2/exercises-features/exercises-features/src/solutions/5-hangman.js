/**
 * Dependencies
 */
var { createHangmanUI } = require('../lib/ui');



/**
 * The actual lab code solution below
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

function Hangman(ui, solution) {
  this.guesses = [];
  this.solution = solution;
  this.ui = ui;

  var game = this;

  ui.onGuess(function (letter) {
    game.guess(letter);
  });
}

Hangman.prototype = {
  render: function () {
    this.ui.update(maskWord(this.solution, this.guesses));
  },

  guess: function (letter) {
    this.guesses.push(letter);
    this.render();

    if (guessedSolution(this.solution, this.guesses)) {
      this.ui.close("You win!");
    }
  },

  start: function () {
    this.render();
  }
};

var hmui = createHangmanUI(document.getElementById("hangman"));
var words = ["Porsche", "Mercedes", "Lamborghini", "Ferrari", "Volkswagen"];
var game = new Hangman(hmui, getRandom(words));

game.start();
