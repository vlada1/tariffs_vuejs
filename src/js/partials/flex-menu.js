const $ = require('jquery');

$(document).ready(function() {
  $('.flex-menu').flexMenu({
    'cutoff' : 0,
		'linkText' : '<span class="view-more"></span>'
  });
});

const headerSearch = document.querySelector('.nav-tools__link--search');

headerSearch.addEventListener('click', function(evt) {
  evt.preventDefault();
  document.getElementById('header-search').classList.toggle('main-search--opened');
});

