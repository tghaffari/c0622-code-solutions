/* exported toObject */
//  Goal: create an object from the input([property, value]).
// Declare a function.
// Create an empty object to assign property and value to.
// Assign value of index 0 as the property of the new object.
// Assign value of index 1 as the value of that property.
// Return new object from the function.

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
