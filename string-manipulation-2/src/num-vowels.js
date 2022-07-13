/* exported numVowels */
// Declare a function
// Set a variable as your counter
// Make string lowercase for consistency
// Loop through every character in the string
//    If it equals a vowel, increment the counter
// Return the value of the counter
//

function numVowels(string) {
  var numVowels = 0;
  var lowerString = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (lowerString[i] === 'a' || lowerString[i] === 'e' || lowerString[i] === 'i' ||
      lowerString[i] === 'o' || lowerString[i] === 'u') {
      numVowels++;
    }
  }
  return numVowels;
}
