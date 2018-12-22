
var correct = 0;
var incorrect = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var computerChoice = "";
var userGuess = "";

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var computerGuess = () =>  {
	computerChoice = letters[Math.floor(Math.random() * letters.length)];

	}

for (var i = 0; i < letters.length; i++) 
var resetGame = () => {
	guessesLeft = 10;
	guessesSoFar = [];
	computerGuess();
};

document.onkeyup = function(event) {
	userGuess = event.key.toLowerCase();
	computerGuess();
	if (userGuess == computerChoice) {
		correct++;
		alertWin();
	} 
	if (userGuess != computerChoice) {
		guessesLeft--;
		guessesSoFar.push(userGuess);
	var page = 
		"<p>Guesses Left </p>" +  "<p>"+ guessesLeft + "</p>" + "<p>Letters Guessed</p>" + "<p>"+ guessesSoFar + "</p>" +
		"<br>" +
		"<p>Correct </p>" + "<p>"+ correct + "</p>" + "<p>Incorrect </p>" + "<p>"+ incorrect + "</p>";
    document.querySelector("#output").innerHTML = page;
    if ( guessesLeft === 0 ) {
		incorrect++;
		alertLoss();
		}
	}

};


var alertWin = () => {
	alert("Your guess is correct " + computerChoice + ".");
	resetGame();
};

var alertLoss = () => {
	alert("You used all your gusses, Please try again");
	resetGame();
};

event();