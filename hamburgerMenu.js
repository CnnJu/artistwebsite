const menu = document.querySelector('.menu');
const liElements = menu.querySelectorAll('li');
const menuToggle = document.getElementById('menu-toggle');

for (let i = 0; i < liElements.length; i++) {
  liElements[i].addEventListener('click', function () {
    // Toggle the state of the #menu-toggle checkbox
    menuToggle.checked = !menuToggle.checked;
  });
}
