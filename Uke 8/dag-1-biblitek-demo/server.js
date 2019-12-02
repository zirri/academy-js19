const express = require('express');
const app = express();

//Middleware
//to serve static files
app.use(express.static('public'));


app.listen(3000, () => {
    console.log('Library app is running on http://localhost:3000')
});