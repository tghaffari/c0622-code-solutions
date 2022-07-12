/* exported isLowerCased */
//  Declare a function
// Set up a loop that runs through all the letters of the string
// compare the value of the letter at specified index to the lowercase version
// the value at that index and if it's not true, return false
// otherwise, return true

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
