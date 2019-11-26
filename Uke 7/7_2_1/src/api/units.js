const express = require('express');

const router = express.Router();

const mToFeet = 3.28084;
const kgToLbs = 2.204623;
const kmToMiles = 0.6213712;

const rates = {
    M:{
        M:1,
        FT:mToFeet,
    },
    FT:{
        M:1/mToFeet,
        FT:1,
    },
    KG:{
        LBS:kgToLbs,
        KG:1,
    },
    LBS:{
        KG: 1/kgToLbs,
        LBS: 1,
    },
    KM:{
        KM:1,
        MILES: kmToMiles,

    },
    MILES:{
        MILES: 1,
        KM: 1/kmToMiles,
    }
}

router.get('/', function(req, res) {
    console.log('handling get request to /currency')
    res.send('response from /currency');
});

router.post('/', function(req, res) {
    try {
        const fromUnit = req.body.fromUnit.toUpperCase();
        const toUnit = req.body.toUnit.toUpperCase();
        const amountFrom = +req.body.amount;
        const amountTo = parseFloat(amountFrom*rates[fromUnit][toUnit]).toFixed(2)
        if(amountTo){
            res.send(`Convert units: ${amountFrom}${fromUnit} equals ${amountTo}${toUnit}`);
        }else{
            res.send('Unit not accepted').status(403)
        }
    }catch (err){
        res.sendStatus(403)
    }
});

module.exports = router;