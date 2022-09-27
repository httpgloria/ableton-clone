import './sass/main.scss';
import { navbar, moreToggle } from './js/navbar';

const menu = document.querySelector('.nav__menu');
const more = document.querySelector('.more-toggle');

menu.addEventListener('click', navbar);
more.addEventListener('click', moreToggle);
