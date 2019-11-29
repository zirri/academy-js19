const express = require('express');
const router = express.Router();

//Middleware

router.get('/', function(req, res) {
    res.send("get request recieved");
});

router.use('/', function(req, res, next) {
    if(req.method == "GET" || req.method == "DELETE"){
        return next();
    }
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;

    if(!name || !phone || !email){
        return next('Not all neccessary input provided');
    }
    const regexValidEmail  = /[\w.-]+@\w+.[a-z]{2,5}/;
    if(!regexValidEmail.test(email)){
        return next('Invalid email');   
    };
    const regexValidPhone  = /[0-9]{8}/;
    if(!regexValidPhone.test(phone)){
        return next('Invalid phone number');   
    }
    next();
});

router.post('/', function(req, res) {
    const body = req.body;
    res.send(body);
});



router.use('/', function(err, req, res, next) {
    console.log("Error: "+err);
    res.send(err).status(500);
});

module.exports = router;