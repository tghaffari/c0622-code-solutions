/* exported oddOrEven */
function oddOrEven(numbers) {
  var oddOrEvenList = [];
  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) === 0) {
      oddOrEvenList.push('even');
    } else {
      oddOrEvenList.push('odd');
    }
  }
  return oddOrEvenList;
}
