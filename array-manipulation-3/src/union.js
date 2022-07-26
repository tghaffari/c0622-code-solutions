/* exported union */
// Declare a function.
// Since the first array has all unique values, copy the first array into
// the second array.
// Compare the items in the second array to the copied array.
// If there's a match, do nothing.
// If there's an item in the second array that isn't in the copied array,
// add it to the copied array.
// Do this over the length of the second array.
// Return the new array from the function

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    newArray.push(first[i]);
  }

  for (i = 0; i < second.length; i++) {
    var match = false;
    for (var a = 0; a < newArray.length; a++) {
      if (second[i] === newArray[a]) {
        match = true;
        break;
      }
    }
    if (!match) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
