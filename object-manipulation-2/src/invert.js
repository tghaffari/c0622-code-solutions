/* exported invert */
// Declare a function
// Declare a variable to hold your new object
// Loop through the source and obtain each property (for in loop)
// Assign the value of each given property as the new object's properties
// Assign the property of the old object as the value of the new property on the new object
// Return the new object once the loop is over

function invert(source) {
  var newObject = {};
  for (var key in source) {
    var newProperty = source[key];
    newObject[newProperty] = key;
  }
  return newObject;
}
