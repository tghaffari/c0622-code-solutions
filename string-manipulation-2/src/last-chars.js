/* exported lastChars */
// Declare a function
// Declare a variable to hold your new string
// Slice the word at the negative values of the designated length
// Return the value from the function

function lastChars(length, string) {
  var cutString = string.slice(-length);
  return cutString;
}
