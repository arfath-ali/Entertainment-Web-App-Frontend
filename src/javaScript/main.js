/* eslint-disable no-undef */
import { loadNavbar } from './utils/navbar.js';

document.addEventListener('DOMContentLoaded', () => {
  const navbarContainer = document.querySelector('.navbar');
  if (navbarContainer) {
    navbarContainer.innerHTML = loadNavbar();
  }
});
