import trendingShowsList from './getTrendingShowsList.js';
import fetchShowsData from './fetchShowsData.js';

export default async function processTrendingShowsData() {
  const trendingShowsEntries = await trendingShowsList();
  const trendingShowsData =
    await retrieveTrendingShowsDetails(trendingShowsEntries);

  return trendingShowsData;
}

async function retrieveTrendingShowsDetails(trendingShowsEntries) {
  console.log('Fetched Shows:');
  const trendingShowsDetails = await Promise.all(
    trendingShowsEntries.map(
      async (entry) => await fetchShowsData(entry.title, entry.type),
    ),
  );

  console.log(trendingShowsDetails);

  trendingShowsDetails.forEach((show) => {
    console.log(show.movie?.title || show.tvShow?.name || 'NO SHOW FOUND!!!');
  });
  return trendingShowsDetails;
}
