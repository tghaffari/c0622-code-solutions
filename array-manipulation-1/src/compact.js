/* exported compact */
// goal: remove all falsish values from the array
// Define a function.
// Declare a new variable to hold an empty array to push values into
// Set up a for loop to go over each value in the array.
// If a value evaluates true, push it into the new array.
// Otherwise, do nothing.
// Stop the loop after the last item in the array.
// Return the new array from the function.

function compact(array) {
  var trueArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      trueArray.push(array[i]);
    }
  }
  return trueArray;
}
