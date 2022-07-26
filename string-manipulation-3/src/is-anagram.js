/* exported isAnagram */

// Convert inputted strings to lowercase to make sure your comparing equal values
// remove the spaces from the word
// Split each string so that each letter is its own item in an array
// If the length of the inputted strings are not the same, they are not anagrams.
// If they are the same, start with the first letter in the first array and compare it to the letters in the second array
//  If you find a match, remove the matching letter from the second array and move on to the next letter in the first array
// When you're done comparing the letters, if the second array is empty then the two words are anagrams

function isAnagram(firstString, secondString) {
  var firstStringLowerCase = firstString.toLowerCase();
  var secondStringLowerCase = secondString.toLowerCase();
  var firstStringNoSpaces = '';
  var secondStringNoSpaces = '';

  for (var i = 0; i < firstStringLowerCase.length; i++) {
    if (firstStringLowerCase[i] !== ' ') {
      firstStringNoSpaces += firstStringLowerCase[i];

    }
  }
  var firstStringArray = firstStringNoSpaces.split('');
  for (i = 0; i < secondStringLowerCase.length; i++) {
    if (secondStringLowerCase[i] !== ' ') {
      secondStringNoSpaces += secondStringLowerCase[i];
    }
  }
  var secondStringArray = secondStringNoSpaces.split('');

  if (firstStringNoSpaces.length !== secondStringNoSpaces.length) {
    return false;
  } else {
    for (i = 0; i < firstStringArray.length; i++) {
      for (var a = 0; a < secondStringArray.length; a++) {
        if (firstStringArray[i] === secondStringArray[a]) {
          secondStringArray.splice(a, 1);
          break;
        }
      }
    }
    if (secondStringArray.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
