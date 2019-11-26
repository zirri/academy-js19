const express = require('express');

const router = express.Router();

const nokToSek = 1.2;
const nokToUsd = 0.5;

const rates = {
    NOK:{
        SEK:nokToSek,
        USD:nokToUsd,
        NOK:1
    },
    SEK:{
        SEK:1,
        USD:nokToUsd/nokToSek,
        NOK:1/nokToSek},
    USD:{
        SEK:nokToSek/nokToUsd,
        USD:1,
        NOK:1/nokToUsd}
}

router.get('/', function(req, res) {
    console.log('handling get request to /currency')
    res.send('response from /currency');
});

router.post('/', function(req, res) {
    try {
        const fromCurrency = req.body.fromCurrency.toUpperCase();
        const toCurrency = req.body.toCurrency.toUpperCase();
        const amountFrom = +req.body.amountCurrency;
        const amountTo = parseFloat(amountFrom*rates[fromCurrency][toCurrency]).toFixed(2)
        if(amountTo){
            res.send(`Convert currency: ${amountFrom}${fromCurrency} equals ${amountTo}${toCurrency}`);
        }else{
            res.send('Currency not accepted').status(403)
        }
       

    }catch (err){
        res.sendStatus(403)
    }
});

module.exports = router;