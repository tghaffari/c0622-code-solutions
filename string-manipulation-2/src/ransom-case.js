/* exported ransomCase */
// Declare a function
// Declare a variable to hold the new word.
// Set up a counter variable
// Using a loop, go through the string
//    Lower case the letters at even indexes.
//    concatenate the letters to the word placeholder variable
//    increase the counter variable
//    Use an if statement to see if there are still letters left
//        Upper case the letters at odd indexes.
//        Concatenate the letters to the to the word placeholder variable
//        Increase the counter variable
// Stop the loop once you reach the end of the string.
// Return the new variable from the function.

function ransomCase(string) {

  var ransomWord = '';
  var i = 0;
  while (i < string.length) {
    ransomWord += string[i].toLowerCase();
    i++;
    if (i < string.length) {
      ransomWord += string[i].toUpperCase();
      i++;
    }
  }
  return ransomWord;
}
