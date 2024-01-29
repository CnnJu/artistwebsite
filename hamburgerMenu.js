const menu = document.querySelector('.menu');
const menuList = menu.children;

// menu.addEventListener('click', function () {
//   toggleVisibilityMenu();
// });
for (let i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener('click', function () {
    toggleVisibilityMenu();
  });
}

console.log(menuList);
function toggleVisibilityMenu() {
  if (menu.style.display !== 'none') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
}
