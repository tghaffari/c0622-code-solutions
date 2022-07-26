/* exported flatten */
// Declare a function
// Declare a variable to hold your new flattened array
// Start with the first item in the inputted array
// If it's not an array, push it to the new array.
// If it is an array, push each item of that array into the new array
// Then, move on to the next item in the original inputted array and continue the process
// until you reach the end.
// Return the value of the flattened array

function flatten(array) {
  var flattenedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      flattenedArray.push(array[i]);
    } else if (Array.isArray(array[i]) === true) {
      for (var a = 0; a < array[i].length; a++) {
        var insideArray = array[i];
        flattenedArray.push(insideArray[a]);
      }
    }
  }
  return flattenedArray;
}
