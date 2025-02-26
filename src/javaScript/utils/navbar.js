/* eslint-disable no-undef */
export default function loadNavbar() {
  const navbarHTML = `<nav
  class="bg-semiDarkBlue tablet:py-6 tablet:pl-6 tablet:pr-4 desktop:p-8 tablet:rounded-[20px] desktop:mb-8 desktop:flex-col flex items-center justify-between px-4 py-[1.125rem]">
  <img
    src="../../media/brand assets/logo.svg"
    class="tablet:w-8 tablet:h-[25.6px] h-5 w-[25px]" />
  <ul
    class="tablet:gap-8 desktop:flex-col desktop:gap-10 desktop:mt-[4.688rem] flex items-center gap-6">
    <li>
      <a href="./home.html"
        ><img
          src="../../media/icons/icons-navbar/icon-nav-home.svg"
          data-icon="home"
          data-icon-default-state="icon-nav-home"
          data-icon-active-state="icon-nav-home-active"
          class="home-icon tablet:h-5 tablet:w-5 h-4 w-4 navbar-icons"
      /></a>
    </li>
    <li>
      <a href="./search.html">
        <img
          src="../../media/icons/icons-navbar/icon-nav-search.svg"
          data-icon="search"
          data-icon-default-state="icon-nav-search"
          data-icon-active-state="icon-nav-search-active"
          class="search-icon tablet:h-6 tablet:w-6 h-5 w-5 navbar-icons" />
      </a>
    </li>
    <li>
      <a href="./bookmarked.html"
        ><img
          src="../../media/icons/icons-navbar/icon-nav-bookmark.svg"
          data-icon="bookmark"
          data-icon-default-state="icon-nav-bookmark"
          data-icon-active-state="icon-nav-bookmark-active"
          class="bookmark-icon tablet:h-5 tablet:w-[16.92px] h-4 w-[13.54px] navbar-icons"
      /></a>
    </li>
  </ul>
  <div>
    <a href="#">
      <img
        src="../../media/profile/martin scorsese.png"
        class="tablet:h-8 tablet:w-8 desktop:w-10 desktop:h-10 desktop:mt-[34.5rem] desktop-L:mt-[28.5rem] border-darkBlue h-6 w-6 rounded-[50%] border border-solid" />
    </a>
  </div>
</nav>`;

  const navbarContainer = document.querySelector('.navbar');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;
  }
}
