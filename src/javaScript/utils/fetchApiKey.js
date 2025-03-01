export default async function fetchApiKey() {
  try {
    const data = await fetch(
      `https://entertainment-web-app-backend-p6xz.onrender.com/api/data`,
    );
    if (!data.ok)
      throw new Error(`Failed to fetch API key. Status: ${data.status}`);

    const { apiKey } = await data.json();

    return apiKey;
  } catch (error) {
    console.log(error);
    return null;
  }
}
