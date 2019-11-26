const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

// Define middleware

app.use(bodyParser.json());


let users = fs.readFileSync('./users.json');
users = JSON.parse(users)
function nextId(users){
    return (Object.keys(users).length)+101;
}

app.get('/user/:userid', (req, res) => {
    let user = users[req.params.userid];
    fs.writeFileSync('./users.json', JSON.stringify(users));
    res.json(user)
})

app.post('/user/', (req, res) => {
    let name = req.body.name;
    let gender = req.body.gender;
    let id = nextId(users);
    users[id] = {
        name: name,
        gender: gender,
    }
    fs.writeFileSync('./users.json', JSON.stringify(users));
    console.log(users)
    res.sendStatus(204);
})

app.put('/user/:userid', (req, res) => {
    let name = req.body.name;
    let gender = req.body.gender;
    users[req.params.userid] = {
        name: name,
        gender: gender,
    }
    fs.writeFileSync('./users.json', JSON.stringify(users));
    res.sendStatus(204);
})

app.delete('/user/:userid', (req, res) => {
    delete users[req.params.userid];
    fs.writeFileSync('./users.json', JSON.stringify(users));
    res.sendStatus(204);
})

// Listen to port

console.log('Listening to port 3000');
app.listen(3000);