const express = require('express');
const app = express();

// Definer routes

app.get('/ping-pong/:para', (req, res) => {
    console.log(req.params.para)
    let pingPing = req.params.para;
    let result = '';
    if(pingPing=='ping'){
        result = 'pong';
    }else if(pingPing == 'pong'){
        result = 'ping';
    }else{
        result = 'unknown property'
    }
    res.json({ message: result });
});


// Listen to port
console.log('Listening to port 3000');
app.listen(3000);