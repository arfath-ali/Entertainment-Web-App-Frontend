import trendingShowsData from './processTrendingShowsData.js';
import showsDom from '../dom/showsDom.js';

export default async function displayHomePageShows() {
  const trendingShows = await trendingShowsData();

  for (const show of trendingShows) {
    const posterPath = show.movie?.poster_path || show.tvShow?.poster_path;
    const posterURL = `https://image.tmdb.org/t/p/original/${posterPath}`;

    const { poster, title } = showsDom();

    poster.src = posterURL;
    title.textContent = show.movie?.title || show.tvShow?.name;
  }
}
