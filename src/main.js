const navMenu = document.getElementById('navMenu');
const navList = document.getElementById('navList');
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');

function openDrawer() {
  navMenu.classList.add('show-menu');
}

function closeDrawer() {
  navMenu.classList.remove('show-menu');
}

navToggle.addEventListener('click', openDrawer);
navClose.addEventListener('click', closeDrawer);
navList.addEventListener('click', ({ target }) => {
  if (target.classList.contains('nav__link')) {
    closeDrawer();
  }
});
