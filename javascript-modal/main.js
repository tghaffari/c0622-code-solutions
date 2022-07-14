// When you click on the blue button, the class for the background div (also containing the modal)
// will be changed to remove class display-none. (final reult: class = background)
// When you click on the no button, the class for the background div will change to
// add the display-none class (final result: class bacckground  = display-none)

var $background = document.querySelector('.background');
var $openModalButton = document.querySelector('.open-modal-button');
var $noButton = document.querySelector('.no-button');

function openModal(event) {
  $background.className = 'background';
}

function closeModal(event) {
  $background.className = 'background display-none';
}

$openModalButton.addEventListener('click', openModal);
$noButton.addEventListener('click', closeModal);
