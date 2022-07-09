/* exported reverse */
// Declare a function
// Declare a variable holding an empty array to push new values into
// Use a for loop to go through each item of the array in reverse order
// and push it into the new array. Use the length of the array -1 to fin
// find the index of the last element
// Stop the loop after you reach the first element
//  Return the new array from the function

function reverse(array) {
  var reverseList = [];
  for (var i = (array.length - 1); i >= 0; i--) {
    reverseList.push(array[i]);
  }
  return reverseList;
}
