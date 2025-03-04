/* eslint-disable no-undef */
import loadNavbar from './utils/navbar.js';
import loadNavbarInteractions from './utils/navbarInteractions.js';
import displayTrendingShows from './utils/displayTrendingShows.js';

document.addEventListener('DOMContentLoaded', () => {
  loadNavbar();
  loadNavbarInteractions();
  displayTrendingShows();
});
