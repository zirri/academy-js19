const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const booksApi = require('./src/bookApi');

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Middleware
//to serve static files
app.use(express.static('public'));
app.use(bodyParser())


app.use('/books', booksApi)

app.listen(port, () => {
    console.log(`Library app is running on http://localhost:${port}`);
});