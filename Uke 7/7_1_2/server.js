const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Define middleware

let users = {
    123:{
        name:"Anne"
    }
}

app.use(bodyParser.json());

app.get('/user/:userid', (req, res) => {
    let user = users[req.params.userid];
    res.json(user)
})

app.post('/user/', (req, res) => {
    let user = users[req.params.userid];
    res.json(user)
})

app.put('/user/:userid', (req, res) => {
    let user = users[req.params.userid];
    res.json(user)
})

app.delete('/user/:userid', (req, res) => {
    delete users[req.params.userid];
    res.sendStatus(204);
    console.log(users)
})

// Listen to port

console.log('Listening to port 3000');
app.listen(3000);