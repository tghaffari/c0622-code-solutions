/* exported reverseWord */
// Declare a function
// Create a variable that's an empty string to hold the new word
// Using a for loop, go through the string in reverse order and add each letter
// to the variable created for the new word.
// Return the new string from the function

function reverseWord(word) {
  var newWord = '';
  for (var i = (word.length - 1); i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
