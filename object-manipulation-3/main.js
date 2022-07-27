console.log('Lodash is loaded:', typeof _ !== 'undefined');

// Create an array for the players. Each item in the array is an object with the name and hand.
// For the hand, create an empty array to hold the card objects that they will be dealt.
var players = [
  {
    name: 'Player 1',
    hand: []
  },
  {
    name: 'Player 2',
    hand: []
  },
  {
    name: 'Player 3',
    hand: []
  },
  {
    name: 'Player 4',
    hand: []
  }
];

// Create a cardDeck Array to hold your card objects.
var cardDeck = [
  {
    rank: 'Ace',
    suit: 'Clubs'
  },
  {
    rank: '2',
    suit: 'Clubs'
  },
  {
    rank: '3',
    suit: 'Clubs'
  },
  {
    rank: '4',
    suit: 'Clubs'
  },
  {
    rank: '5',
    suit: 'Clubs'
  },
  {
    rank: '6',
    suit: 'Clubs'
  },
  {
    rank: '7',
    suit: 'Clubs'
  },
  {
    rank: '8',
    suit: 'Clubs'
  },
  {
    rank: '9',
    suit: 'Clubs'
  },
  {
    rank: '10',
    suit: 'Clubs'
  },
  {
    rank: 'Jack',
    suit: 'Clubs'
  },
  {
    rank: 'Queen',
    suit: 'Clubs'
  },
  {
    rank: 'King',
    suit: 'Clubs'
  },
  {
    rank: 'Ace',
    suit: 'Diamonds'
  },
  {
    rank: '2',
    suit: 'Diamonds'
  },
  {
    rank: '3',
    suit: 'Diamonds'
  },
  {
    rank: '4',
    suit: 'Diamonds'
  },
  {
    rank: '5',
    suit: 'Diamonds'
  },
  {
    rank: '6',
    suit: 'Diamonds'
  },
  {
    rank: '7',
    suit: 'Diamonds'
  },
  {
    rank: '8',
    suit: 'Diamonds'
  },
  {
    rank: '9',
    suit: 'Diamonds'
  },
  {
    rank: '10',
    suit: 'Diamonds'
  },
  {
    rank: 'Jack',
    suit: 'Diamonds'
  },
  {
    rank: 'Queen',
    suit: 'Diamonds'
  },
  {
    rank: 'King',
    suit: 'Diamonds'
  },
  {
    rank: 'Ace',
    suit: 'Hearts'
  },
  {
    rank: '2',
    suit: 'Hearts'
  },
  {
    rank: '3',
    suit: 'Hearts'
  },
  {
    rank: '4',
    suit: 'Hearts'
  },
  {
    rank: '5',
    suit: 'Hearts'
  },
  {
    rank: '6',
    suit: 'Hearts'
  },
  {
    rank: '7',
    suit: 'Hearts'
  },
  {
    rank: '8',
    suit: 'Hearts'
  },
  {
    rank: '9',
    suit: 'Hearts'
  },
  {
    rank: '10',
    suit: 'Hearts'
  },
  {
    rank: 'Jack',
    suit: 'Hearts'
  },
  {
    rank: 'Queen',
    suit: 'Hearts'
  },
  {
    rank: 'King',
    suit: 'Spades'
  },
  {
    rank: 'Ace',
    suit: 'Spades'
  },
  {
    rank: '2',
    suit: 'Spades'
  },
  {
    rank: '3',
    suit: 'Spades'
  },
  {
    rank: '4',
    suit: 'Spades'
  },
  {
    rank: '5',
    suit: 'Spades'
  },
  {
    rank: '6',
    suit: 'Spades'
  },
  {
    rank: '7',
    suit: 'Spades'
  },
  {
    rank: '8',
    suit: 'Spades'
  },
  {
    rank: '9',
    suit: 'Spades'
  },
  {
    rank: '10',
    suit: 'Spades'
  },
  {
    rank: 'Jack',
    suit: 'Spades'
  },
  {
    rank: 'Queen',
    suit: 'Spades'
  },
  {
    rank: 'King',
    suit: 'Spades'
  }
];

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

// Shuffle the deck. Loop through each player two times
// Deal them the top card from the deck

var shuffledDeck = _.shuffle(cardDeck);
var cardIndex = 0;
for (var a = 1; a <= 2; a++) {
  for (var i = 0; i < players.length; i++) {
    players[i].hand.push(shuffledDeck[cardIndex]);
    cardIndex++;
  }
}

// Compare the card in each players hand to the scoring table.
// Add up their scores and add it to each player
for (i = 0; i < players.length; i++) {
  var score = 0;
  score += scoringTable[players[i].hand[0].rank];
  score += scoringTable[players[i].hand[1].rank];
  players[i].score = score;
}

// Check to see who won by finding out who had the highest score.
// Assign that player as the winner.
var winner = players[0];
for (i = 1; i < players.length; i++) {
  if (winner.score < players[i].score) {
    winner = players[i];
  }
}

// Check for a tie with the winner
// If there's a tie, announce there's a tie and who the winners are.
// If no tie, announce the single winner.
var additionalWinnersArray = [];
for (i = 0; i < players.length; i++) {
  if (winner.score === players[i].score && (winner.name !== players[i].name)) {
    additionalWinnersArray.push(players[i].name);
  }
}

// Report the winners
// Check if additionalWinnersArray is empty. If it is, there was only one winner.
// If it isn't, report the multiple winners.

if (additionalWinnersArray.length !== 0) {
  var winnersList = additionalWinnersArray.join(',');
  console.log('There was a tie. The winners are ', winnersList + ' and ' + winner.name);
} else {
  console.log('The winner is ', winner.name);
}
