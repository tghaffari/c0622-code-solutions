/* exported capitalizeWords */
// Declare a function
// Split the inputted word at each space and assign result to a variable
// Declare a variable with an empty string value (Will hold future string)
// Loop through array and capitalize each word
//    Get the first word
//    Capitalize the first letter
//    Slice the remaining letters and make them lowercase
//    Add the first word with the remaining letters and assign that to a variable
//    If it's not the last word, concatenate with the word + space
//    Otherwise, concatenate the word with no space
// Stop the loop after the end of the string
// Return the values from the function

function capitalizeWords(string) {
  var wordList = string.split(' ');
  var newString = '';
  for (var i = 0; i < wordList.length; i++) {
    var word = wordList[i];
    var firstChar = word[0];
    firstChar = firstChar.toUpperCase();
    var remainingLetters = word.slice(1);
    remainingLetters = remainingLetters.toLowerCase();
    var capWord = firstChar + remainingLetters;
    if (i !== (wordList.length - 1)) {
      newString += capWord + ' ';
    } else {
      newString += capWord;
    }
  }
  return newString;
}
