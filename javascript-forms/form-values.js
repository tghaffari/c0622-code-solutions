var $contactForm = document.querySelector('#contact-form');

function submit(event) {
  event.preventDefault();
  var $nameInput = $contactForm.elements.name.value;
  var $emailInput = $contactForm.elements.email.value;
  var $messageInput = $contactForm.elements.message.value;
  var formInput = { name: $nameInput, email: $emailInput, message: $messageInput };
  console.log(formInput);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', submit);
