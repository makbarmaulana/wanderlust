/* eslint-disable no-undef */
const header = document.getElementById('header');
const navMenu = document.getElementById('navMenu');
const navList = document.getElementById('navList');
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');
const subtitle = document.querySelector('.hero__subtitle');
const title = document.querySelector('.hero__title');
const description = document.querySelector('.hero__description');
const button = document.querySelector('.hero__button');
const heroImages1 = document.querySelector('.hero__images-1');
const heroImages2 = document.querySelector('.hero__images-2');
const heroImages3 = document.querySelector('.hero__images-3');
const heroImages4 = document.querySelector('.hero__images-4');
const bird1 = document.querySelector('.hero__bird-1');
const bird2 = document.querySelector('.hero__bird-2');

function openDrawer() {
  navMenu.classList.add('show-menu');
}

function closeDrawer() {
  navMenu.classList.remove('show-menu');
}

function shadowAnimation() {
  if (this.scrollY >= 50) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', shadowAnimation);
  navToggle.addEventListener('click', openDrawer);
  navClose.addEventListener('click', closeDrawer);
  navList.addEventListener('click', ({ target }) => {
    if (target.classList.contains('nav__link')) {
      closeDrawer();
    }
  });

  gsap.from(heroImages2, 1.2, { opacity: 0, y: 200, delay: 0.1 });
  gsap.from(heroImages3, 1.2, { opacity: 0, y: 200, delay: 0.5 });
  gsap.from(heroImages1, 1.2, { opacity: 0, y: 200, delay: 1.5 });
  gsap.from(heroImages4, 1.2, { opacity: 0, y: 200, delay: 1 });

  gsap.set([subtitle, title, description, button], { opacity: 0, y: -50 });
  gsap.to(subtitle, 1, { opacity: 1, y: 0, delay: 1 });
  gsap.to(title, 1, { opacity: 1, y: 0, delay: 1.3 });
  gsap.to(description, 1, { opacity: 1, y: 0, delay: 1.6 });
  gsap.to(button, 1, { opacity: 1, y: 0, delay: 1.9 });
  gsap.from(bird1, 1, { opacity: 0, x: -80, delay: 1.9 });
  gsap.from(bird2, 1, { opacity: 0, x: 80, delay: 1.9 });
});
