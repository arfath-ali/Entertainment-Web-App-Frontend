 export function loadNavbar() {
  return `<nav
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
          class="tablet:h-5 tablet:w-5 h-4 w-4"
      /></a>
    </li>
    <li>
      <a href="./search.html">
        <img
          src="../../media/icons/icons-navbar/icon-nav-search.svg"
          class="tablet:h-6 tablet:w-6 h-5 w-5" />
      </a>
    </li>
    <li>
      <a href="./bookmarked.html"
        ><img
          src="../../media/icons/icons-navbar/icon-nav-bookmark.svg"
          class="tablet:h-5 tablet:w-[16.92px] h-4 w-[13.54px]"
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
}
