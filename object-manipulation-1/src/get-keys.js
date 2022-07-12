/* exported getKeys */
// Declare a function
// Create a new variable with the value of an empty array.
// Use a for in loop to get all the properties of the object.
// Push the obtained properties into the new array.
// Return the array keys

function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
