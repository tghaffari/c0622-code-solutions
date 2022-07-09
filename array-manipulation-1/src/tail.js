/* exported tail */
// Define a function
// Declare a variable to hold an empty array that you'll be adding values to
// in order to create the new array.
// Loop over the given array starting at index 1 (second element) and push each
// element into the new array
// Stop the loop after it reaches the end of the array
// return the value of the new array from the function

function tail(array) {
  var tailList = [];
  for (var i = 1; i < array.length; i++) {
    tailList.push(array[i]);
  }
  return tailList;
}
