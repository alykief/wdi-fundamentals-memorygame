//Create an array to store cards
var cards = ["queen", "queen", "king", "king"];

//Create an empty array 
var cardsInPlay = [];

//Create a variable cardOne
var cardOne = cards[0];

//Add first card to cardsInPlay array
cardsInPlay.push(cardOne);

//Use console.log() to display the User flipped card
console.log("User flipped" + cardOne);

//Create a variable cardTwo
var cardTwo = cards[2];

//Add second card to cardsInPlay array
cardsInPlay.push(cardTwo);

//Use console.log() to display the User flipped card 
console.log("User flipped" + cardTwo);

//Write an if statement to check if the length of cardsInPlay array is 2
if (cardsInPlay.length === 2) {
	//Write an if...else statement that checks for equality of the two cards
	if (cardsInPlay[0] === cardsInPlay[1]) {
		//If values are equal, alert "Match", otherwise, alert "Try again"
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
		}
	}
