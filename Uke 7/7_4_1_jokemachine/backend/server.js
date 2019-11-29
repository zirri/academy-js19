const express = require('express');
const cors = require('cors');
const jokes = require('./src/jokesApi');
const app = express();

//Middleware
app.use(cors());


//Defining endpoints and returns
app.use('/jokes', jokes);

app.use('/', (req, res,next) =>{
    res.status(404).send("Invalid path: Endpoint should be '/jokes/")
})

//Starting listening
const port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log('Listening to port: '+port)
})