// console.log('Lodash is loaded:', typeof _ !== 'undefined');

// function cardGame(players, numberOfCards) {
//   // Create an array for the players.
//   var playersList = [];

//   // Create a cardDeck Array to hold your card objects.
//   var cardDeck = [
//     {
//       rank: 'Ace',
//       suit: 'Clubs'
//     },
//     {
//       rank: '2',
//       suit: 'Clubs'
//     },
//     {
//       rank: '3',
//       suit: 'Clubs'
//     },
//     {
//       rank: '4',
//       suit: 'Clubs'
//     },
//     {
//       rank: '5',
//       suit: 'Clubs'
//     },
//     {
//       rank: '6',
//       suit: 'Clubs'
//     },
//     {
//       rank: '7',
//       suit: 'Clubs'
//     },
//     {
//       rank: '8',
//       suit: 'Clubs'
//     },
//     {
//       rank: '9',
//       suit: 'Clubs'
//     },
//     {
//       rank: '10',
//       suit: 'Clubs'
//     },
//     {
//       rank: 'Jack',
//       suit: 'Clubs'
//     },
//     {
//       rank: 'Queen',
//       suit: 'Clubs'
//     },
//     {
//       rank: 'King',
//       suit: 'Clubs'
//     },
//     {
//       rank: 'Ace',
//       suit: 'Diamonds'
//     },
//     {
//       rank: '2',
//       suit: 'Diamonds'
//     },
//     {
//       rank: '3',
//       suit: 'Diamonds'
//     },
//     {
//       rank: '4',
//       suit: 'Diamonds'
//     },
//     {
//       rank: '5',
//       suit: 'Diamonds'
//     },
//     {
//       rank: '6',
//       suit: 'Diamonds'
//     },
//     {
//       rank: '7',
//       suit: 'Diamonds'
//     },
//     {
//       rank: '8',
//       suit: 'Diamonds'
//     },
//     {
//       rank: '9',
//       suit: 'Diamonds'
//     },
//     {
//       rank: '10',
//       suit: 'Diamonds'
//     },
//     {
//       rank: 'Jack',
//       suit: 'Diamonds'
//     },
//     {
//       rank: 'Queen',
//       suit: 'Diamonds'
//     },
//     {
//       rank: 'King',
//       suit: 'Diamonds'
//     },
//     {
//       rank: 'Ace',
//       suit: 'Hearts'
//     },
//     {
//       rank: '2',
//       suit: 'Hearts'
//     },
//     {
//       rank: '3',
//       suit: 'Hearts'
//     },
//     {
//       rank: '4',
//       suit: 'Hearts'
//     },
//     {
//       rank: '5',
//       suit: 'Hearts'
//     },
//     {
//       rank: '6',
//       suit: 'Hearts'
//     },
//     {
//       rank: '7',
//       suit: 'Hearts'
//     },
//     {
//       rank: '8',
//       suit: 'Hearts'
//     },
//     {
//       rank: '9',
//       suit: 'Hearts'
//     },
//     {
//       rank: '10',
//       suit: 'Hearts'
//     },
//     {
//       rank: 'Jack',
//       suit: 'Hearts'
//     },
//     {
//       rank: 'Queen',
//       suit: 'Hearts'
//     },
//     {
//       rank: 'King',
//       suit: 'Spades'
//     },
//     {
//       rank: 'Ace',
//       suit: 'Spades'
//     },
//     {
//       rank: '2',
//       suit: 'Spades'
//     },
//     {
//       rank: '3',
//       suit: 'Spades'
//     },
//     {
//       rank: '4',
//       suit: 'Spades'
//     },
//     {
//       rank: '5',
//       suit: 'Spades'
//     },
//     {
//       rank: '6',
//       suit: 'Spades'
//     },
//     {
//       rank: '7',
//       suit: 'Spades'
//     },
//     {
//       rank: '8',
//       suit: 'Spades'
//     },
//     {
//       rank: '9',
//       suit: 'Spades'
//     },
//     {
//       rank: '10',
//       suit: 'Spades'
//     },
//     {
//       rank: 'Jack',
//       suit: 'Spades'
//     },
//     {
//       rank: 'Queen',
//       suit: 'Spades'
//     },
//     {
//       rank: 'King',
//       suit: 'Spades'
//     }
//   ];

//   // Create a scoring table to later tally each players score.

//   var scoringTable = {
//     Ace: 11,
//     King: 10,
//     Queen: 10,
//     Jack: 10,
//     10: 10,
//     9: 9,
//     8: 8,
//     7: 7,
//     6: 6,
//     5: 5,
//     4: 4,
//     3: 3,
//     2: 2
//   };

//   // Assign the players to the playerList array. Each item in the array is an object with the name and hand.
//   // For the hand, create an empty array to hold the card objects that they will be dealt.
//   for (var z = 0; z < players.length; z++) {
//     var player = {};
//     player.name = players[z];
//     player.hand = [];
//     playersList.push(player);
//   }
//   // Shuffle the deck.

//   var shuffledDeck = _.shuffle(cardDeck);

//   // Loop through each player. The number of times that you loop depends on the number of cards they are to be dealt.
//   // Deal them the top card from the deck
//   var cardIndex = 0;
//   for (var a = 0; a < numberOfCards; a++) {
//     for (var i = 0; i < playersList.length; i++) {
//       playersList[i].hand.push(shuffledDeck[cardIndex]);
//       cardIndex++;
//     }
//   }

//   // Compare the card in each players hand to the scoring table.
//   // Add up their scores and add it to each player
//   for (i = 0; i < playersList.length; i++) {
//     var score = 0;
//     score += scoringTable[playersList[i].hand[0].rank];
//     score += scoringTable[playersList[i].hand[1].rank];
//     playersList[i].score = score;
//   }

//   // Check to see who won by finding out who had the highest score.
//   // Assign that player as the winner.
//   var winner = playersList[0];
//   for (i = 1; i < playersList.length; i++) {
//     if (winner.score < playersList[i].score) {
//       winner = playersList[i];
//     }
//   }

//   // Check for a tie with the winner
//   // If there's a tie, announce there's a tie and who the winners are.
//   // If no tie, announce the single winner.
//   var additionalWinnersArray = [];
//   for (i = 0; i < playersList.length; i++) {
//     if (winner.score === playersList[i].score && (winner.name !== playersList[i].name)) {
//       additionalWinnersArray.push(playersList[i].name);
//     }
//   }

//   // Report the winners
//   // Check if additionalWinnersArray is empty. If it is, there was only one winner.
//   // If it isn't, report the multiple winners.

//   if (additionalWinnersArray.length !== 0) {
//     var winnersList = additionalWinnersArray.join(',');
//     console.log('There was a tie.', winnersList + ' and ' + winner.name + ' will play again');

//   } else {
//     console.log('The winner is', winner.name);
//   }
//   console.log(playersList);
// }
