
var $columnFull = document.querySelector('.column-full');
var $faCircle = document.querySelectorAll('.fa-circle');
var $faChevronLeft = document.querySelector('.fa-chevron-left');
var $faChevronRight = document.querySelector('.fa-chevron-right');
var $img = document.querySelector('img');

var index = 0;

function updateImage() {
  if (index === 0) {
    $img.setAttribute('src', 'images/001.png');
    $img.setAttribute('alt', 'Bulbasaur');
  } else if (index === 1) {
    $img.setAttribute('src', 'images/004.png');
    $img.setAttribute('alt', 'Charizard');
  } else if (index === 2) {
    $faCircle.className = ('far fa-circle spacing');
    $faCircle[2].className = ('fas fa-circle spacing');
    $img.setAttribute('src', 'images/007.png');
    $img.setAttribute('alt', 'Squirtle');
  } else if (index === 3) {
    $faCircle[2].className = ('far fa-circle spacing');
    $faCircle[3].className = ('fas fa-circle spacing');
    $faCircle[4].className = ('far fa-circle spacing');
    $img.setAttribute('src', 'images/025.png');
    $img.setAttribute('alt', 'Pikachu');
  } else if (index === 4) {
    $faCircle[3].className = ('far fa-circle spacing');
    $faCircle[4].className = ('fas fa-circle spacing');
    $faCircle[0].className = ('far fa-circle spacing');
    $img.setAttribute('src', 'images/039.png');
    $img.setAttribute('alt', 'Jiggly Puff');
  }
  for (var i = 0; i <= 4; i++) {
    if (i === index) {
      $faCircle[i].className = ('fas fa-circle spacing');
    } else {
      $faCircle[i].className = ('far fa-circle spacing');
    }
  }
}

function interval() {
  index++;
  if (index === 5) {
    index = 0;
  }
  updateImage();
}
var intervalID = setInterval(interval, 3000);

function rightChevronClick(event) {
  clearInterval(intervalID);
  index++;
  if (index === 5) {
    index = 0;
  }
  updateImage();
  intervalID = setInterval(interval, 3000);
}

$faChevronRight.addEventListener('click', rightChevronClick);

function leftChevronClick(event) {
  clearInterval(intervalID);
  index--;
  if (index === -1) {
    index = 4;
  }
  updateImage();
  intervalID = setInterval(interval, 3000);
}

$faChevronLeft.addEventListener('click', leftChevronClick);

function handleCircleClick(event) {
  clearInterval(intervalID);

  if (event.target === $faCircle[0]) {
    index = 0;
    updateImage();
  } else if (event.target === $faCircle[1]) {
    index = 1;
    updateImage();
  } else if (event.target === $faCircle[2]) {
    index = 2;
    updateImage();
  } else if (event.target === $faCircle[3]) {
    index = 3;
    updateImage();
  } else if (event.target === $faCircle[4]) {
    index = 4;
    updateImage();
  }
  intervalID = setInterval(interval, 3000);
}

$columnFull.addEventListener('click', handleCircleClick);
