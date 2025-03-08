export default async function fetchShowsData(showTitle, showType) {
  try {
    const response = await fetch(
      `https://entertainment-web-app-backend-p6xz.onrender.com/api/shows?title=${encodeURIComponent(showTitle)}&type=${showType}`,
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data.results[0];
  } catch (error) {
    console.log(error);
    return [];
  }
}
