import trendingShowsData from './processTrendingShowsData.js';
import showsDom from '../dom/showsDom.js';
import { domElements } from '../dom/domElements.js';

export default async function displayTrendingShows() {
  const trendingShows = await trendingShowsData();

  for (const trendingShow of trendingShows) {
    const posterPath = trendingShow.poster_path;
    const posterURL = `https://image.tmdb.org/t/p/original/${posterPath}`;

    const { show, poster, title } = showsDom();

    show.classList.add('trending-show');
    poster.src = posterURL;
    title.textContent = trendingShow.title || trendingShow.name;

    domElements.trendingShowsContainer.appendChild(show);
  }
}
