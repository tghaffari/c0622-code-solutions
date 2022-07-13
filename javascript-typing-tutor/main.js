
var $span = document.querySelectorAll('span');
// var string = 'grumpy wizards make toxic brew';
// make variable for user input
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
