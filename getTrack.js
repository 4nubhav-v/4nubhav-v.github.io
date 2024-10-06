// api/getTrack.js
import dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch"; // Use import instead of require
import express from "express";
import cors from "cors"; // Import cors after expressapp.use(cors());

const app = express();
app.use(cors()); // Use cors after app has been defined
const API_KEY = process.env.LASTFM_API_KEY;
const USERNAME = process.env.LASTFM_USERNAME;
const API_URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json`;

const PORT = 3000;

app.get("/track", async (req, res) => {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data);
  res.json(data);
});
app.listen(PORT, () => {
  console.log(`Server 127.0.0.1:${PORT}`);
});
// export default async function handler(req, res) {
//   const API_KEY = process.env.LASTFM_API_KEY;
//   const USERNAME = process.env.LASTFM_USERNAME;
//   const API_URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json`;

//   try {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     // res.status(200).json(data);
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching data" });
//   }
// }
