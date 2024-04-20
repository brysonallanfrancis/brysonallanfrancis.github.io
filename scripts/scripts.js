document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.mobile-menu').classList.toggle('menu-open');
});


document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
  });