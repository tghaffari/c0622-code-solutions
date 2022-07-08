/* exported countdown */
function countdown(number) {
  var countdown = [];
  var i = 0;
  var workingNumbers = number;
  while (i <= workingNumbers) {
    countdown.push(workingNumbers);
    workingNumbers -= 1;
  }
  return countdown;
}
