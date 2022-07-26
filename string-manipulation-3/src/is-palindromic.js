/* exported isPalindromic */
// Declare a function
// Convert the string to all lowercase for consistency.
// Remove any spaces that might exist in the inputted string and assign that to a new variable.
// Reverse the word you just obtained and assign that to a different variable.
// Compare the two variables.
// If they match, return true
// Otherwise, return false

function isPalindromic(string) {
  var stringLowerCase = string.toLowerCase();
  var stringNoSpaces = '';
  var reverseWord = '';

  for (var i = 0; i < stringLowerCase.length; i++) {
    if (stringLowerCase[i] !== ' ') {
      stringNoSpaces += stringLowerCase[i];
    }
  }

  for (i = (stringNoSpaces.length - 1); i >= 0; i--) {
    reverseWord += stringNoSpaces[i];
  }

  if (stringNoSpaces === reverseWord) {
    return true;
  } else {
    return false;
  }
}
