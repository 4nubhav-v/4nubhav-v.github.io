// server.js
require('dotenv').config();
const express = require('express');
const app = express();

// Endpoint to get environment variables
app.get('/api/info', (req, res) => {
    const phoneNumber = process.env.PHONE;
    const email = process.env.EMAIL;
    res.json({ phoneNumber, email });
});

module.exports = app;
