// backend/index.js

require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 4000;
const dbUrl = process.env.DB_URL;
const jwtSecret = process.env.JWT_SECRET;
const apiKey = process.env.API_KEY

const dotenv = require('dotenv');
const morgan = require('morgan');

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: './.env.prod'});
} else if (process.env.NODE_ENV === 'development') {
    dotenv.config({ path: './.env.dev'});
} else if (process.env.NODE_ENV === 'test') {
    dotenv.config( { path: './.env.test'});
} else {
    dotenv.config();
}

app.use(morgan('combined')); // Logs requests to the console

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Backend API of genericWebAPP', jwtSecret, apiKey})
});

app.listen(port, () => {
    console.log('Backend API is running on port ${port}');
    console.log('JWT Secret: ${jwtSecret}');
    console.log('API Key: ${apiKey}');
});