/* exported takeRight */
// Declare a function
// Check if count is longer than the length of the array.
//    If it is, return a copy of the array
//    If it isn't, slice the array at the negative value of coynt
// Return the new array from the function.

function takeRight(array, count) {
  if (count > array.length) {
    var newArray = array;
    return newArray;
  } else {
    newArray = array.slice(-count);
    return newArray;
  }
}
