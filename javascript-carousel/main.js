
var $columnFull = document.querySelector('.column-full');
var $faCircle = document.querySelectorAll('.fa-circle');
var $faChevronLeft = document.querySelector('.fa-chevron-left');
var $faChevronRight = document.querySelector('.fa-chevron-right');
var $img = document.querySelector('img');

var index = 0;
var intervalID = null;

var imgSrcArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var imgAltArray = ['Bulbasaur', 'Charizard', 'Squirtle', 'Pikachu', 'Jiggly Puff'];

function updateImage() {
  for (var i = 0; i < imgSrcArray.length; i++) {
    if (index === i) {
      $img.setAttribute('src', imgSrcArray[i]);
      $img.setAttribute('alt', imgAltArray[i]);
      $faCircle[i].className = ('fas fa-circle spacing');
    } else {
      $faCircle[i].className = ('far fa-circle spacing');
    }
  }
}

function moveForward(event) {
  clearInterval(intervalID);
  index++;
  if (index === 5) {
    index = 0;
  }
  updateImage();
  intervalID = setInterval(moveForward, 3000);
}

$faChevronRight.addEventListener('click', moveForward);

function leftChevronClick(event) {
  clearInterval(intervalID);
  index--;
  if (index === -1) {
    index = 4;
  }
  updateImage();
  intervalID = setInterval(moveForward, 3000);
}

$faChevronLeft.addEventListener('click', leftChevronClick);

function handleCircleClick(event) {
  clearInterval(intervalID);
  for (var i = 0; i < $faCircle.length; i++) {
    if (event.target.getAttribute('data-id') === $faCircle[i].getAttribute('data-id')) {
      index = i;
      updateImage();
    }
  }
  intervalID = setInterval(moveForward, 3000);
}

$columnFull.addEventListener('click', handleCircleClick);
intervalID = setInterval(moveForward, 3000);
