/* eslint-disable no-undef */
import { domElements } from './domElements.js';

export default function showsDom() {
  const movie = document.createElement('div');
  const poster = document.createElement('img');
  const title = document.createElement('h1');
  poster.classList.add(
    'min-w-[150px]',
    'max-w-[150px]',
    'min-h-[230px]',
    'max-h-[230px]',
    'overflow-scroll',
  );
  title.classList.add('text-15', 'text-wrap', 'text-center', 'mt-2');
  movie.appendChild(poster);
  movie.appendChild(title);
  domElements.trendingShowsContainer.appendChild(movie);

  return { poster, title };
}
