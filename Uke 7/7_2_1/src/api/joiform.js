const express = require('express');
const router = express.Router();

const Joi = require('joi'); 
const joiSchema = Joi.object().keys({ 
  name: Joi.string().alphanum().min(3).max(30).required(),
  phone: Joi.string().regex(/[0-9]{8}/).required(), 
  email: Joi.string().email().required(), 
}); 


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

    const dataToValidate = { 
        name: name,
        phone: phone, 
        email: email 
      } 
      const result = Joi.validate(dataToValidate, joiSchema); 

      console.log(typeof result)
    next();
});

router.post('/', function(req, res) {
    const body = req.body;
    res.send(body);
});

module.exports = router;

router.use('/', function(err, req, res, next) {
    console.log("Error: "+err);
    res.send(err).status(500);
});