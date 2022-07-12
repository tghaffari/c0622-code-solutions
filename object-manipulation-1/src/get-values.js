/* exported getValues */
// Define a function.
// Assign an empty array to a variable to hold desired values.
// Use a for in loop to get the properties of the inputted object.
// Push the values of those properties into the created array using bracket notation.
// Return the value of the array from the function.

function getValues(object) {
  var values = [];
  for (var prop in object) {
    values.push(object[prop]);
  }
  return values;
}
