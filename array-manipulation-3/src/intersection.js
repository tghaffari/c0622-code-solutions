/* exported intersection */
// Declare a function
// Declare an empty array to hold your new array
// Start with the first item in the first array.
// Compare it to the items in the second array.
// If there's a match, push the item into the new array.
// Do this over the length of the first array.
// Return the new array from the function.

function intersection(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    for (var a = 0; a < second.length; a++) {
      if (second[a] === first[i]) {
        newArray.push(second[a]);
      }
    }
  }
  return newArray;
}
