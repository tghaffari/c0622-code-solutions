/* exported take */
// Declare a function
// Declare a variable to hold the new array
// Start from the beginning and slice the array at the given count
// Return the value from the function

function take(array, count) {
  var newArray = array.slice(0, count);
  return newArray;
}
