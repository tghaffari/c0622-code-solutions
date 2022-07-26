/* exported difference */
// Declare a function
// Create a new array to push values into
// Start by comparing the first array to the second.
//    Start with the first item in the first array.
//    Compare it to the items in the second array.
//    If there's a match, do nothing.
//    If there isn't, add the item from the first array to the new array.
//    Do this over the entire length of the first array.
// Repeat the steps for the second array.
//    Start with the first item in the second array.
//    If it matches any of the items in the first array, do nothing
//    If it doesn't, push it into the new array.
//    Do this over the entire length of the second array
// Return the new array

function difference(first, second) {
  var newArray = [];

  for (var i = 0; i < first.length; i++) {
    var match = false;
    for (var a = 0; a < second.length; a++) {
      if (first[i] === second[a]) {
        match = true;
        break;
      }
    }
    if (match === false) {
      newArray.push(first[i]);
    }
  }

  for (i = 0; i < second.length; i++) {
    match = false;
    for (a = 0; a < first.length; a++) {
      if (second[i] === first[a]) {
        match = true;
        break;
      }
    }
    if (match === false) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
