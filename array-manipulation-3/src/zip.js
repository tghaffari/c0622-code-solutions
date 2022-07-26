/* exported zip */
// Declare a function
// Figure out which array has the shorter length.
// If the lengths are the same, use the value of the length of the first array as the length
// If they're different, assign the value of the shorter length to a variable.
// Start with the first item of each array and push them into a new array.
// Push the array containing the pair into another array.
// Reset the value of the array holding the pair
// Move on to the next item in the inputted arrays.
// Continue doing this for the over the shorter length that you obtained
// return the new array with the pairs

function zip(first, second) {
  var pairsArray = [];
  var zippedArray = [];

  if (first.length <= second.length) {
    var length = first.length;
  } else if (second.length < first.length) {
    length = second.length;
  }

  for (var i = 0; i < length; i++) {
    pairsArray.push(first[i]);
    pairsArray.push(second[i]);
    zippedArray.push(pairsArray);
    pairsArray = [];
  }
  return zippedArray;
}
