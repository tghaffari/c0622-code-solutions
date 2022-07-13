// Classes that need to be changed:
//    .background-on/.background-off
//    .on/.off
// Start with the bulb in the on position
// If the bulb is on when you click on it, change the circle and container class
// names to the off designations.
// Otherwise, if the bulb is off when you click it, change the circle and container class names
// to the on designations.
// Add an event listener for the click.

var $circle = document.querySelector('.circle');
var $container = document.querySelector('.container');
var lightOn = true;
function onOff(event) {
  if (lightOn) {
    $circle.className = 'circle off';
    $container.className = 'container background-off';
    lightOn = false;
  } else {
    $circle.className = 'circle on';
    $container.className = 'container background-on';
    lightOn = true;
  }
}

$circle.addEventListener('click', onOff);
