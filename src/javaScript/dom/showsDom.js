/* eslint-disable no-undef */
import { domElements } from './domElements.js';

export default function showsDom() {
  const show = document.createElement('div');
  const poster = document.createElement('img');
  const title = document.createElement('h1');
  show.classList.add('hover:cursor-pointer');
  poster.classList.add(
    'min-w-[120px]',
    'min-h-[180px]',
    'tablet:min-w-[150px]',
    'tablet:min-h-[225px]',
    'desktop:min-w-[200px]',
    'desktop:min-h-[300px]',
    'overflow-scroll',
    'rounded-[12px]',
  );
  title.classList.add(
    'text-15',
    'font-weight-medium',
    'text-wrap',
    'text-center',
    'mt-2',
  );
  show.appendChild(poster);
  show.appendChild(title);

  if (show.classList.contains('trending-show')) {
    domElements.trendingShowsContainer.appendChild(show);
  } else if (show.classList.contains('recommended-show')) {
    domElements.recommendedShowsContainer.appendChild(show);
  }

  return { poster, title };
}
