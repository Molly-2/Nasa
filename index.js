const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, etc.)
app.use(express.static('public'));

// NASA API information
const NASA_API_KEY = 'MpVu0LEY5gFkymvdEKnYeE7tqunbJ3Lm4WpXDqty';
const NASA_API_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

// Endpoint to get a random photo and information
app.get('/randomphoto', async (req, res) => {
  try {
    const response = await axios.get(NASA_API_URL);
    const data = response.data;
    res.json({
      title: data.title,
      explanation: data.explanation,
      url: data.url,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from NASA API' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
