const express = require('express');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Express server!' });
});

app.get('/second-branch', (req, res) => {
  res.json({ message: 'This is Second Branch API!' });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
