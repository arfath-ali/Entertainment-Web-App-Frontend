/* eslint-disable no-undef */
export function loadNavbarInteractions() {
  const currentPage = document.querySelector(`.${document.body.dataset.page}`);
  const navbarIcons = document.querySelectorAll('.navbar-icons');

  if (!currentPage) return;

  resetIconState(navbarIcons);

  navbarIcons.forEach((icon) => {
    if (currentPage.dataset.icon === icon.dataset.icon) {
      icon.src = `../../media/icons/icons-navbar/${icon.dataset.iconActiveState}.svg`;
    }
  });
}

function resetIconState(navbarIcons) {
  navbarIcons.forEach((icon) => {
    icon.src = `../../media/icons/icons-navbar/${icon.dataset.iconDefaultState}.svg`;
  });
}
