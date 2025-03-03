import homePageShowsData from './renderHomePageShows.js';
import showsDom from '../dom/showsDom.js';

export default async function displayHomePageShows() {
  const trendingShowsData = await homePageShowsData();
  console.log(trendingShowsData);
  console.log(Array.isArray(trendingShowsData));

  for (const show of trendingShowsData) {
    const posterPath = show.movie?.poster_path || show.tvShow?.poster_path;
    const posterURL = `https://image.tmdb.org/t/p/original/${posterPath}`;

    const { poster, title } = showsDom();


    poster.src = posterURL;
    title.textContent = show.movie?.title || show.tvShow?.name;
  }
}
