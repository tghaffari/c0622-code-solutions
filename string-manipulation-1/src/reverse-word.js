/* exported reverseWord */
// Declare a function
// Create an empty array to hold the new letters
// Create a variable that's an empty string to hold the new word
// Using a for loop, go through the string in reverse order and add each letter
// to the new array.
// Use another for loop to extract each letter from the new array and add them together
// to make a new string, the original word in reverse order
// return the new string from the function

function reverseWord(word) {
  var reverseWord = [];
  var newWord = '';
  for (var i = (word.length - 1); i >= 0; i--) {
    reverseWord.push(word[i]);
  }
  for (var a = 0; a < reverseWord.length; a++) {
    newWord += reverseWord[a];
  }
  return newWord;
}
