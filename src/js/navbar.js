const menu = document.querySelector('.nav__menu');
const nav = document.querySelector('.links');
const linksMore = document.querySelector('.links__more');

function navbar() {
  menu.classList.toggle('light');
  nav.classList.toggle('open');
}

function moreToggle() {
  linksMore.classList.toggle('more-open');
}

export { navbar, moreToggle };
