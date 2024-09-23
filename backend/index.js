// backend/index.js

require('dotenv').config();

const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: './.env.prod'});
} else if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: './.env.dev'});
} else if (process.env.NODE_ENV === 'test') {
    dotenv.config( { path: './.env.test'});
} else {
    dotenv.config();
}

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const dbUrl = process.env.DB_URL;

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Backend API of genericWebAPP'})
});

app.listen(port, () => {
    console.log('Backend API is running on port ${port}');
});