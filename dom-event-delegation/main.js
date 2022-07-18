var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', taskCompleted);

function taskCompleted(event) {
  console.log('event.target: ', event.target);
  console.log('event.target.tagName: ', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var closestItem = event.target.closest('.task-list-item');
    console.log('Closest Item:', closestItem);
    closestItem.remove();
  }
}
