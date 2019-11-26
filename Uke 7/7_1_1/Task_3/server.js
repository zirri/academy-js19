const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Define middleware

app.use(cors());
app.use(bodyParser.json());

//Fetch functions
const url = 'https://xkcd.com/info.0.json';

// Definer routes
app.get('/xkcd', async (req, res) => {
    request(url,(error, status, body)=>{
        res.type('application/json').send(body);
    })
});

// Listen to port

console.log('Listening to port 3001');
app.listen(3001);