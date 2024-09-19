// api/getTrack.js
export default async function handler(req, res) {
  const API_KEY = process.env.LASTFM_API_KEY; // Use environment variables
  const USERNAME = process.env.LASTFM_USERNAME;
  const API_URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
}

