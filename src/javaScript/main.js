/* eslint-disable no-undef */
import loadNavbar from './utils/navbar.js';
import loadNavbarInteractions from './utils/navbarInteractions.js';
import displayHomePageShows from './utils/displayHomePageShows.js';

document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  loadNavbarInteractions();
  displayHomePageShows();
});
