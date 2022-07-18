/* exported truncate */
// Declare a function
// Splice the string at the designate length (index is length), concatenate
// it with ellipis (...) and assign it a variable
// Return the variable from the function.

function truncate(length, string) {
  var newWord = string.slice(0, length) + '...';
  return newWord;
}
