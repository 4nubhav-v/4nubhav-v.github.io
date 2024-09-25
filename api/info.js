const express = require('express');
const app = express();
require('dotenv').config();

// Endpoint to get environment variables
app.get('/api/info', (req, res) => {
    const phoneNumber = process.env.PHONE;
    const email = process.env.EMAIL;
    res.setHeader('Content-Type', 'application/json');  // Ensure response is JSON
    res.status(200).json({ phoneNumber, email });
});

// Export as a function to be used by Vercel serverless environment
module.exports = (req, res) => {
    app(req, res);
};
