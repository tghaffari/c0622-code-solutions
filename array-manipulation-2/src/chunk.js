/* exported chunk */
// Declare a function
// Create a copy of the array
// Create two new empty arrays, one for the smaller array elements, one to hold
// all the elements
// Loop through the length of the array
// As long as you haven't reached the end of the array, loop through the
// desired chunk size and push those elements into a new array.
// Push those smaller chunks into the new array.
// Return the new array

function chunk(array, size) {
  var arrayCopy = array;
  var shortArray = [];
  var newArray = [];
  var i = 0;
  while (i < arrayCopy.length) {
    for (var a = 0; a < size; a++) {
      if (i < array.length) {
        shortArray.push(arrayCopy[i]);
        i++;
      }
    }
    newArray.push(shortArray);
    shortArray = [];
  }
  return newArray;
}
