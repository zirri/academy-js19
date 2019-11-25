const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Define middleware

app.use(cors());
app.use(bodyParser.json());

// Definer routes

app.get('/coffee', (req, res) => {
    console.log('Request for coffee');
    res.json({ message: 'Here you go' });
});

app.get('/coffee/:foo', (req, res) => {
    console.log(req.params);
    res.send('Here is an ' + req.params.foo);
});

app.post('/coffee', (req, res) => {
    console.log(req.body);
    res.sendStatus(204);
});

// Listen to port

console.log('Listening to port 3000');
app.listen(3000);