import trendingShowsInfo from './fetchTrendingShowsInfo.js';
import fetchShows from './fetchShows.js';

export default async function renderHomePageShows() {
  const trendingShowsList = await trendingShowsInfo();
  const trendingShowsData = await fetchTrendingShowsData(trendingShowsList);

  return trendingShowsData;
}

async function fetchTrendingShowsData(trendingShowsList) {
  console.log('Fetched Shows:');
  const trendingShowsData = await Promise.all(
    trendingShowsList.map(
      async (show) => await fetchShows(show.title, show.type),
    ),
  );

  console.log(trendingShowsData);

  trendingShowsData.forEach((show) => {
    console.log(show.movie?.title || show.tvShow?.name || 'NO SHOW FOUND!!!');
  });
  return trendingShowsData;
}
