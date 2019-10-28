//GuessTheNumber

function playGuessTheNumber(n,m) {
    var numberToGuess = Math.floor((Math.random() * (m-n))+n);
    var lastGuessed = -1;
    var message = "";
    var numberOfGuesses = 0;
    while (numberToGuess != lastGuessed) {
        numberOfGuesses++;
        lastGuessed = +prompt(message + 'Guess the number between '+n+' and '+m);
        
        if (lastGuessed == numberToGuess) {
            alert('You guessed the number! \n Number of guesses:'+numberOfGuesses);
        }else if(lastGuessed<numberToGuess){
            message = "Too low \n";
        }else if(lastGuessed>numberToGuess){
            message = "Too high \n";
        }
    }
}

var startRangeNumber = 0;
var endRangeNumber = 0;

while(true){
    startRangeNumber = +prompt('Input lower number for range: ');
    endRangeNumber = +prompt('Input upper number for range: ');
    playGuessTheNumber(startRangeNumber,endRangeNumber);
    playAgain= confirm('Do you want to play again?');
    if(!playAgain){
        break;
    }
}