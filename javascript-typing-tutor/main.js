// Query all the span elements from the HTML document
// Set up a variable for the index number
// Start the first span element in the default stat
// Declare a function
// If the user's input matches the letter:
//     change formatting to correct
//     Move on to the next letter and change styling to default
// Otherwise, change styling to wrong. (they won't be able to move on until they
// push the correct letter)

var $span = document.querySelectorAll('span');
var i = 0;
$span[i].className = 'default';
function typingTutor(event) {
  if (event.key === $span[i].textContent) {
    $span[i].className = 'correct';
    i++;
    $span[i].className = 'default';
  } else {
    $span[i].className = 'wrong';
  }
}

document.addEventListener('keydown', typingTutor);
