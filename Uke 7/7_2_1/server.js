const express = require('express');
const currency = require('./src/api/currency');
const units = require('./src/api/units');
const form = require('./src/api/form');
const joiform = require('./src/api/joiform');
const bodyParser = require('body-parser');

// Define middleware
const app = express();
app.use(bodyParser.json());
app.use('/', function(req, res,next) {
    console.log("request received");
    next();
});

app.use('/', function(req, res,next) {
    console.log(req.method);
    next();
});

app.use('/', function(req, res,next) {
    console.log(req.url);
    next();
});


app.use('/currency', currency);
app.use('/units', units);
app.use('/form', form);
app.use('/joiform', joiform);

//listen
const port = 3001;
app.listen(port);
console.log('listen to port '+port);




//Test body for input
/*
{
	"fromCurrency":"sek",
	"toCurrency":"nok",
	"amountCurrency":"200",
	"fromUnit":"sek",
	"toUnit":"nok",
	"amount":"200"
}
*/ 