var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

function switchTabs(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        $tab[i].className = 'tab active';
        var dataViewAttribute = event.target.getAttribute('data-view');
        for (var a = 0; a < $view.length; a++) {
          if ($view[a].getAttribute('data-view') === dataViewAttribute) {
            $view[a].className = 'view';
          } else {
            $view[a].className = 'view hidden';
          }
        }
      } else {
        $tab[i].className = 'tab';
      }
    }
  }
}

$tabContainer.addEventListener('click', switchTabs);
