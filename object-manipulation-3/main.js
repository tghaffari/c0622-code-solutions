console.log('Lodash is loaded:', typeof _ !== 'undefined');

// eslint-disable-next-line no-unused-vars
function cardGame(players, numberOfCards) {
  // Create an array for the players.
  var playersList = [];

  // Create a cardDeck Array to hold your card objects.
  // Create an array holding each of the card ranks.
  // create an array holding each of the card suits.
  // Using the cardRank and cardSuit arrays, generate card objects and push them into
  // your card Deck.

  var cardDeck = [];
  var cardRank = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack',
    'Queen', 'King'];
  var cardSuit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];

  for (var i = 0; i < cardRank.length; i++) {
    for (var a = 0; a < cardSuit.length; a++) {
      var cardObject = {};
      cardObject.rank = cardRank[i];
      cardObject.suit = cardSuit[a];
      cardDeck.push(cardObject);
    }
  }

  // Create a scoring table to later tally each players score.

  var scoringTable = {
    Ace: 11,
    King: 10,
    Queen: 10,
    Jack: 10,
    10: 10,
    9: 9,
    8: 8,
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2
  };

  // Assign the players to the playerList array. Each item in the array is an object with the name and hand.
  // For the hand, create an empty array to hold the card objects that they will be dealt.
  for (var z = 0; z < players.length; z++) {
    var player = {};
    player.name = players[z];
    player.hand = [];
    playersList.push(player);
  }
  // Shuffle the deck.

  var shuffledDeck = _.shuffle(cardDeck);

  // Loop through each player. The number of times that you loop depends on the number of cards they are to be dealt.
  // Deal them the top card from the deck
  var cardIndex = 0;
  for (a = 0; a < numberOfCards; a++) {
    for (i = 0; i < playersList.length; i++) {
      playersList[i].hand.push(shuffledDeck[cardIndex]);
      cardIndex++;
    }
  }

  // Compare the card in each players hand to the scoring table.
  // Add up their scores and add it to each player
  for (i = 0; i < playersList.length; i++) {
    var score = 0;
    score += scoringTable[playersList[i].hand[0].rank];
    score += scoringTable[playersList[i].hand[1].rank];
    playersList[i].score = score;
  }

  // Check to see who won by finding out who had the highest score.
  // Assign that player as the winner.
  var winner = playersList[0];
  for (i = 1; i < playersList.length; i++) {
    if (winner.score < playersList[i].score) {
      winner = playersList[i];
    }
  }

  // Check for a tie with the winner
  // If there's a tie, announce there's a tie and who the winners are.
  // If no tie, announce the single winner.
  var additionalWinnersArray = [];
  for (i = 0; i < playersList.length; i++) {
    if (winner.score === playersList[i].score && (winner.name !== playersList[i].name)) {
      additionalWinnersArray.push(playersList[i].name);
    }
  }

  // Report the winners
  // Check if additionalWinnersArray is empty. If it is, there was only one winner.
  // If it isn't, report the multiple winners.

  if (additionalWinnersArray.length !== 0) {
    var winnersList = additionalWinnersArray.join(',');
    console.log('There was a tie.', winnersList + ' and ' + winner.name + ' will play again');
    additionalWinnersArray.push(winner.name);
    cardGame(winnersList, numberOfCards);

  } else {
    console.log('The winner is', winner.name);
  }
  console.log(playersList);
}
