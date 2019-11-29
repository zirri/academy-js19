const express = require('express');
const router = express.Router();


function getJoke(){
    let index = Math.floor(Math.random()* jokes.length);
    return jokes[index]
};


let jokes = ["What do you call a hippie\'s wife? A Mississippi!",
    "What did the duck say when she bought a lipstick? Put it on my bill!",
    "I hate Russian dolls. They're so full of themselves.",
    "What do you call a man with a rubber toe? Roberto!"];

router.get('/', (req, res) => {
    console.log('get request handeled');
    res.json({ message: getJoke() });
});

module.exports = router;

