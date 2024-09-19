const API_URL = "https://4nubhav.netlify.app/.netlify/functions/getTrack";

async function fetchCurrentTrack() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data); // Log data for debugging
    const track = data.recenttracks.track[0];

    if (track && track["@attr"] && track["@attr"].nowplaying) {
      document.getElementById(
        "track-name"
      ).textContent = `Track Name: ${track.name}`;
      document.getElementById(
        "artist-name"
      ).textContent = `Artist: ${track.artist["#text"]}`;
      document.getElementById("album-cover").src = track.image[3]["#text"];
    } else {
      document.getElementById("track-name").textContent =
        "No track is currently playing.";
      document.getElementById("artist-name").textContent = "";
      document.getElementById("album-cover").src = "";
    }
  } catch (error) {
    console.error("Error fetching track information:", error);
    document.getElementById("track-name").textContent =
      "Error fetching track information.";
    document.getElementById("artist-name").textContent = "";
    document.getElementById("album-cover").src = "";
  }
}

// Fetch current track information on page load
fetchCurrentTrack();

// Optionally, refresh every 30 seconds
setInterval(fetchCurrentTrack, 30000);
