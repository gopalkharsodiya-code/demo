const express = require('express');
const app = express();

// Define port
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Hello World! Node.js App is running.');
});

// About route
app.get('/about', (req, res) => {
    res.send('This is a demo Node.js application.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
