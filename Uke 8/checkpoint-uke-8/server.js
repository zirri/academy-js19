const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const moviesApi = require('./src/moviesApi');

//Middleware
//Body parser
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//to serve static files
app.use(express.static('public'));

//Logging
app.use('/movies/:id?', (req, res, next)=>{
    let log = `Request of type ${req.method}`;
    if(req.params.id){
        log += ` with id= ${req.params.id}`
    };
    console.log(log);
    next();
})

//routing
app.use('/movies', moviesApi)

app.listen(port, () => {
    console.log(`Movie app is running on http://localhost:${port}`);
});