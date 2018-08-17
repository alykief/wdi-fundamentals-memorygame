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
	//Check cards in play and make pop-up for user reference
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};

//Create a function called flipCard that accepts one parameter
var flipCard = function () {
	//Store card that was just flipped by user 
	cardId = this.getAttribute('data-id');
		console.log(cardId);
		//Add the card that the user flipped to the cardsInPlay array
		cardsInPlay.push(cards[cardId].card);
		//Create console.log() for image and suit
		console.log(cards[cardId].cardImage)
		console.log(cards[cardId].suit)
	//Update the src to image of card clicked 
	this.setAttribute('src', cards[cardId].cardImage);
	//Check if cards have been played 
	if (cardsInPlay.length === 2) {
		checkForMatch();
		}
};

//Write a function to create a new game board
var createBoard = function () {
	//Loop through the cards array 
	for (var i = 0; i < cards.length; i++){
		//Create img element and store in cardElement 
		var cardElement = document.createElement('img');
			//Use setAttribute() to add a src so users see back of card 
			cardElement.setAttribute('src', 'images/back.png');
			//Set card's data-id to current index within array 
			cardElement.setAttribute('data-id', i);
			//Add a click event to flip the card 
			cardElement.addEventListener('click', flipCard);
			//Append cardElement to game-board
			document.getElementById('game-board').appendChild(cardElement);
	}
}
//Invoke createBoard function
createBoard();
