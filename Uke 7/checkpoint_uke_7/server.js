const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const carsApi = require('./src/carsApi')


//middleware
app.use(bodyParser());


//routes
app.use('/cars', carsApi);

//initilize port and start listening
const port = 3000;
app.listen(port, () => {
    console.log('listening on port '+port);
});