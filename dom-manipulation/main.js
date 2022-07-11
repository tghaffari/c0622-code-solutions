// Declare a function
// Increase counter by 1
// Change text content on each click so that
// click count = 'Clicks:' + numClicks
// Use if statements to change appearance of button by changing class
//    If < 4, class = cold
//    If < 7, class = cool
//    If < 10, class = tepid
//    If < 13, class = warm
//    If < 16, class = hot
//    if >= 16 class = nuclear

var numClicks = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function numberOfClicks(event) {
  numClicks++;
  $clickCount.textContent = 'Clicks:' + numClicks;
  if (numClicks < 4) {
    $hotButton.className = 'hot-button cold';
  }
  if (numClicks >= 4 && numClicks < 7) {
    $hotButton.className = 'hot-button cool';
  }
  if (numClicks >= 7 && numClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  }
  if (numClicks >= 10 && numClicks < 13) {
    $hotButton.className = 'hot-button warm';
  }
  if (numClicks >= 13 && numClicks < 16) {
    $hotButton.className = 'hot-button hot';
  }
  if (numClicks >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', numberOfClicks);
