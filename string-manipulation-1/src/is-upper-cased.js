/* exported isUpperCased */
//  Declare a function
// Set up a loop that runs through all the letters of the string
// compare the value of the letter at specified index to the uppercase version
// the value at that index and if it's not true, return false
// otherwise, return true

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
