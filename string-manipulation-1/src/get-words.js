/* exported getWords */
// Declare a function
// Check if input is a string with characters
// If no characters, return an empty array
// Otherwise, split the string using a space identifier and assign the new array to a variable
//    return the variable holding the array from the function

function getWords(string) {
  if (string === '') {
    var words = [];
    return words;
  } else {
    words = string.split(' ');
    return words;
  }
}
