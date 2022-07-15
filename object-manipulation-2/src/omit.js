/* exported omit */
// Create a copy of the source object by looping through the source and adding each property
// and its corresponding value to a new object.
// Start with the first value in the keys array (you will loop over them).
// Looping over the properties in the object you created, check if the property matches the
// value of keys.
//  If they match, delete that property from the object.
// Move on to the next key and repeat the process until you've gone through all the keys.
// Return the new object from the function.

function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    newObject[key] = source[key];
  }
  for (var i = 0; i < keys.length; i++) {
    for (var prop in newObject) {
      if (prop === keys[i]) {
        delete newObject[prop];
      }
    }
  }
  return newObject;
}
