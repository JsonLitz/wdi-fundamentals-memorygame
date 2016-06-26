

console.log("JS file is connected to HTML! Woo!")

// var cardOne = 'king'
// var cardTwo = 'king'
// var cardThree = 'queen'
// var cardFour = 'queen'

var cards = ['king','king','queen','queen'];
var cardsInPlay = [];

// if (cardTwo === cardThree)  {
// 	alert ("Sorry, try again!")

// }

var gameBoard = document.getElementById("game-board");


var createBoard = function() {
for (var i = 0; i < cards.length; i++) {

	var newCard = document.createElement('div');
	newCard.className = "card";
	document.getElementById("game-board").appendChild(newCard);
	newCard.setAttribute('data-card', cards[i]);
	newCard.addEventListener('click', isTwoCards);
	newCard.innerHTML = '<img src="../images/King of Diamonds.png" alt="King of Spades" />';
	
}
}


function isTwoCards() {

cardsInPlay.push(this.getAttribute('data-card'));

if (cardsInPlay.length === 2)  {

	isMatch(cardsInPlay);
	  cardsInPlay = [];
	

}
}

function isMatch(cardsInPlay) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ('Congrats! You win!')

	}	else {
		alert ('Sorry, try again.')

	}
	
}

