// api/getTrack.js
import fetch from 'node-fetch'; // Ensure you have this dependency installed

export default async function handler(event, context) {
  const API_KEY = process.env.LASTFM_API_KEY; // Use environment variables
  const USERNAME = process.env.LASTFM_USERNAME;
  const API_URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error fetching data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

