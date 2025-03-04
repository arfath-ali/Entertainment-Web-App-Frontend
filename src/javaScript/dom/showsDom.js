/* eslint-disable no-undef */
import { domElements } from './domElements.js';

export default function showsDom() {
  const movie = document.createElement('div');
  const poster = document.createElement('img');
  const title = document.createElement('h1');
  movie.classList.add("hover:cursor-pointer")
  poster.classList.add(
    'min-w-[120px]',
    'min-h-[180px]',
    'tablet:min-w-[150px]',
    'tablet:min-h-[225px]',
    'desktop:min-w-[200px]',
    'desktop:min-h-[300px]',
    'overflow-scroll',
  );
  title.classList.add('text-15', "font-weight-medium",'text-wrap', 'text-center', 'mt-2');
  movie.appendChild(poster);
  movie.appendChild(title);
  domElements.trendingShowsContainer.appendChild(movie);

  return { poster, title };
}
