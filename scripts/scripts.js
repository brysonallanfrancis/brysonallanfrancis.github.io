// Hamburger menu function
function hamburger() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
      navlinks.style.display = "none";
      menuicon.style.color = "#2a1f14";
    } else {
      navlinks.style.display = "block";
      menuicon.style.color = "#f6eee4";
    }
  }


document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
  });