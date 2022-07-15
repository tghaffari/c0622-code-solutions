/* exported defaults */
// Declare a function
// Go through the properties in source and and compare them to those in target
// If theres a match, do nothing
// If there isn't a match, add the property and value from source to target.

function defaults(target, source) {

  for (var key in source) {
    var match = false;
    for (var prop in target) {
      if (key === prop) {
        match = true;
      }
    }
    if (!match) {
      target[key] = source[key];
    }
  }
}
