export default async function trendingShowsList() {
  try {
    const response = await fetch('../../../json/shows.json');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    const trendingShowsList = data.trending;

    console.log(trendingShowsList);

    return trendingShowsList;
  } catch (error) {
    console.error(error);
    return [];
  }
}
