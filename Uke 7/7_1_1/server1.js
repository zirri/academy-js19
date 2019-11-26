const express = require('express');
const app = express();

//Data
const jokes = [
    "What do you call a hippie\'s wife? A Mississippi!",
    "What did the duck say when she bought a lipstick? Put it on my bill!",
    "I hate Russian dolls. They're so full of themselves.",
    "What do you call a man with a rubber toe? Roberto!"
];

function getJoke(){
    let index = Math.floor(Math.random()* jokes.length);
    return jokes[index]
}


// Definer routes

app.get('/jokes', (req, res) => {
    console.log('get request handeled');
    res.json({ message: getJoke() });
});


// Listen to port
console.log('Listening to port 3000');
app.listen(3000);