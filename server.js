// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint to get environment variables
app.get('/api/info', (req, res) => {
    const phoneNumber = process.env.PHONE;
    const email = process.env.EMAIL;
    res.json({ phoneNumber, email });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
