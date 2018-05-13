// var cards = ["queen", "queen", "king", "king"];

var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
  rank: 'queen',
  suit: 'diamonds',
  cardImage: 	"images/queen-of-diamonds.png"
},
{
  rank: 'king',
  suit: 'hearts',
  cardImage: "images/king-of-hearts.png"
},
{
  rank: 'king',
  suit: 'diamonds',
  cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var checkForMatch = function(){
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry try again!");
    }
  }
}
var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log("cardsInPlay", cardsInPlay);
  console.log("ccardImage", cards[cardId].cardImage);
  console.log("suit", cards[cardId].suit);

  checkForMatch();
  //
  // var cardOne = cards[0];
  // cardsInPlay.push(cardOne);
  //
  // var cardTwo = cards[2];
  // cardsInPlay.push(cardTwo);
};

flipCard(0);
flipCard(2);
