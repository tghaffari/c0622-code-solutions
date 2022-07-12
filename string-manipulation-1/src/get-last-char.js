/* exported getLastChar */
// Define the function passing through the variable string
// Declare a variable that will hold the last character of the string
// Calculate the last index of the string by finding the length of the string
// and subtracting by 1.
// Assign the value of the string at the last index to that variable
// Return the variable holding the value of the last character from the function
function getLastChar(string) {
  var lastChar = string[string.length - 1];
  return lastChar;
}
