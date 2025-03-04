import fetchApiKey from './fetchApiKey.js';

let apiKey;

export default async function fetchShowsData(showTitle, showType) {
  try {
    if (!apiKey) {
      apiKey = await fetchApiKey();
    }

    const movieAPI = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(showTitle)}`;
    const tvAPI = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodeURIComponent(showTitle)}`;

    let response;
    let data;
    let foundShow;
    let movie;
    let tvShow;

    if (showType === 'movie') {
      response = await fetch(movieAPI);
      if (!response.ok)
        throw new Error(`HTTP error! Status:${response.status}`);

      data = await response.json();
      console.log(data);

      foundShow =
        data.results[0].title.toLowerCase() === showTitle.toLowerCase()
          ? data.results[0]
          : null;

      movie = foundShow;
      tvShow = null;
    } else if (showType === 'webseries') {
      response = await fetch(tvAPI);
      if (!response.ok)
        throw new Error(`HTTP error! Status:${response.status}`);

      data = await response.json();
      foundShow =
        data.results[0].name.toLowerCase() === showTitle.toLowerCase()
          ? data.results[0]
          : null;

      tvShow = foundShow;
      movie = null;
    } else {
      throw new Error('Invalid show type');
    }

    return { movie, tvShow };
  } catch (error) {
    console.log(error);
    return { movie: null, webSerie: null };
  }
}
