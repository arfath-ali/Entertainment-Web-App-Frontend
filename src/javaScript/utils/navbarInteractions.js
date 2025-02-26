/* eslint-disable no-undef */
export function loadNavbarInteractions() {
  const currentPage = document.querySelector(`.${document.body.dataset.page}`);
  const navbarIcons = document.querySelectorAll('.navbar-icons');

  if (!currentPage) return;

  resetIconState(navbarIcons);

  const activeIcon = [...navbarIcons].find(
    (icon) => currentPage.dataset.icon === icon.dataset.icon,
  );

  if (activeIcon) {
    activeIcon.src = `../../media/icons/icons-navbar/${activeIcon.dataset.iconActiveState}.svg`;
  }
}

function resetIconState(navbarIcons) {
  navbarIcons.forEach((icon) => {
    icon.src = `../../media/icons/icons-navbar/${icon.dataset.iconDefaultState}.svg`;
  });
}
