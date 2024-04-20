// Hamburger menu function
function hamburger() {
  var menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
      menu.style.display = "none";
  } else {
      menu.style.display = "block";
  }
}
// Hide Element
function toggleForm() {
  var form = document.getElementById('myForm');
  form.classList.toggle('hidden'); // Toggle the 'hidden' class
}