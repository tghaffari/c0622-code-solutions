function handleCLick(event) {
  console.log('Button clicked.');
  console.log('Event:', event);
  console.log('Event target:', event.target);
}

var $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleCLick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('Event:', event);
  console.log('Event target:', event.target);
}

var $hoverButton = document.querySelector('.hover-button');
$hoverButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('Button double-clicked');
  console.log('Event:', event);
  console.log('Event + target:', event.target);
}

var $doubleCLickButton = document.querySelector('.double-click-button');
$doubleCLickButton.addEventListener('dblclick', handleDoubleClick);
