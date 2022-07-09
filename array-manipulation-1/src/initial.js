/* exported initial */
// Define a function
// Declare a variable to hold an empty array that you'll be adding values to
// in order to create the new array.
// Loop over the given array starting at index 0 (first element) and push each
// element into the new array
// Stop the loop after it reaches the second to last element of the array (length -1)
// return the value of the new array from the function

function initial(array) {
  var initialList = [];
  for (var i = 0; i < (array.length - 1); i++) {
    initialList.push(array[i]);
  }
  return initialList;
}
