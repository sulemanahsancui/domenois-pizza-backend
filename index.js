const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define another route
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
