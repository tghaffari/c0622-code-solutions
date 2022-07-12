/* exported swapChars */
// Declare a function.
// Assign the value to hold the new string
// Loop through the characters in the string
// Add characters to new variable until you reach the character at the first index
// If if you reach the first index, instead add the value of the character
// at the second index.
// Continue adding letters until you reach the second index.
// When you reach the second index, instead add the value for the first index
// Continue adding characters until you reach the end of the string
// Return the value of the new string

function swapChars(firstIndex, secondIndex, string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += string[secondIndex];
    } else if (i === secondIndex) {
      newString += string[firstIndex];
    } else newString += string[i];
  }
  return newString;
}
