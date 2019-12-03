const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const booksApi = require('./src/bookApi')


//Middleware
//to serve static files
app.use(express.static('public'));
app.use(bodyParser())

app.use('/books', booksApi)
//routes and endpoints

app.listen(3000, () => {
    console.log('Library app is running on http://localhost:3000');
});