//Create an array to store cards
var cards = [
	{
		card: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		card: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		card: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		card: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];

//Create an empty array 
var cardsInPlay = [];

//Create a function to check for match
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

//Create a function called flipCard that accepts one parameter
var flipCard = function (cardId) {
		//Add a console.log() statement to display flipped card
		console.log("User flipped " + cards[cardId].card);
		//Add the card that the user flipped to the cardsInPlay array
		cardsInPlay.push(cards[cardId].card);
		//Create console.log() for image and suit
		console.log(cards[cardId].cardImage)
		console.log(cards[cardId].suit)
		//Check if cards have been played 
		if (cardsInPlay.length === 2) {
			checkForMatch();
			}
};

//Simulate user flipping a card 
flipCard(0);
flipCard(2);
