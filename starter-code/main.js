

console.log("JS file is connected to HTML! Woo!")

// var cardOne = 'king'
// var cardTwo = 'king'
// var cardThree = 'queen'
// var cardFour = 'queen'

var cards = ['king','king','queen','queen'];
var cardsInPlay = [];


var gameBoard = document.getElementById("game-board");


var createBoard = function() {
for (var i = 0; i < cards.length; i++) {

	var newCard = document.createElement('div');
	newCard.className = "card";
	document.getElementById("game-board").appendChild(newCard);
	newCard.setAttribute('data-card', cards[i]);
	newCard.addEventListener('click', isTwoCards);
	
}
}


function isTwoCards() {


cardsInPlay.push(this.getAttribute('data-card'));
 console.log(this.getAttribute('data-card'));
 if (this.getAttribute('data-card') === 'king') {
   this.innerHTML = "<img src='images/King of Spades.png'>";
 }
   else {
     this.innerHTML = "<img src='images/Queen of Hearts.png'>";
   }
 if (cardsInPlay.length === 2) {
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

createBoard();


// var button = document.querySelector("button"),
//   carCont = document.querySelector("#cardCont"),
//   cards = [{
//     card: "King",
//     source: "http://static.giantbomb.com/uploads/scale_super/0/1899/2248129-kspreview.png"
//   }, {
//     card: "Queen",
//     source: "../images/Queen of clubs.png"
//   }];

// function addCard() {
//   var card = document.createElement("DIV");
//   card.className = "cards";
//   card.style.backgroundImage = "url(" + cards[Math.floor(Math.random() * cards.length)].source + ")"
//   cardCont.appendChild(card);
// }

// button.addEventListener("click", addCard);