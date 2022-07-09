/* exported capitalize */
// Declare a function.
// Identify the first character of the word by taking its index at 0 and
// assign that to a new variable, firstChar
// Make the value of firstChar uppercase by using the toUpperCase() method of
// the firstChar object.
// obtain the rest of the letters by slicing the word at index 1 and assign that to a variable
// make the remaining letters lowercase using toLowerCase()
// declare a new variable and add the capitalized first char with the r
// remaining letters

function capitalize(word) {
  var firstChar = word[0];
  firstChar = firstChar.toUpperCase();
  var remainingLetters = word.slice(1);
  remainingLetters = remainingLetters.toLowerCase();
  var capWord = firstChar + remainingLetters;
  return capWord;
}
