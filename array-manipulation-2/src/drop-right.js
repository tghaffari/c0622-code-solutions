/* exported dropRight */
// Declare a function
// declare a var to hold input array
// Check if input is an empty array.
// If it's empty, return the empty array copy
// If not, slice the array at the length-count and assign to a new var
// Return the value from the function

function dropRight(array, count) {
  var newArray = array;
  if (array === []) {
    return newArray;
  } else {
    newArray = newArray.slice(0, (newArray.length - count));
    return newArray;
  }
}
