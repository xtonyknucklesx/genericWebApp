// backend/index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Backend API of genericWebAPP'})
});

app.listen(port, () => {
    console.log('Backend API is running on port ${port}');
});