/* exported pick */
// Declare a function
// Declare a variable to hold the new object
// Start with the first item in the array (keys) (you will loop through them)
// Loop through each property of the object. If the property matches the item in
// the array and it's value isn't undefined, add that property and it's value to
// the new object that you created. (if there's no match, nothing will get added)
// Do this for each item in the array (loop will stop at the end of the array)
// Return the value of the new object from the function

function pick(source, keys) {
  var newObject = {};
  for (var i = 0; i < keys.length; i++) {
    for (var prop in source) {
      if (prop === keys[i] && source[prop] !== undefined) {
        newObject[keys[i]] = source[prop];
      }
    }
  }
  return newObject;
}
