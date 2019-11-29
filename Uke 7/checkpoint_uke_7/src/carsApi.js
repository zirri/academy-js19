const express = require('express');
const router = express.Router();
const apiFn = require('./apiFunctions');

//defining middleware
router.use('/',(req,res,next)=>{
    const filename = './src/cars.json';
    req.app.set('allCars', apiFn.readFromFile(filename));
    next();
})

router.use('/range/:minRange', (req, res, next) => {
    const checkRangeFormat = apiFn.checkRangeFormat(req.params.minRange);
    if(checkRangeFormat.error){
        return next(checkRangeFormat.error)
    }
    next();
});

router.use('/range/:minRange/:maxRange', (req, res, next) => {
    const maxRange = parseInt(req.params.maxRange);
    const minRange = parseInt(req.params.minRange);
    const checkRangeFormat = apiFn.checkRangeFormat(req.params.maxRange);
    if(checkRangeFormat.error){
        return next(checkRangeFormat.error)
    }
    const validRange = apiFn.checkValidRange(minRange,maxRange);
    if(validRange.error){
        return next(validRange.error);
    }
    next();
});


//defining endpoints
router.get('/fast-charge', (req, res) => {
    const fastChargingCars = apiFn.getCarsWithFeature(req.app.get('allCars'),'fast-charge');
    res.json(fastChargingCars);
})

router.get('/range/:minRange/:maxRange', (req, res) => {
    const minRange = parseInt(req.params.minRange);
    const maxRange = parseInt(req.params.maxRange);
    const cars = apiFn.getCarsWithRange(req.app.get('allCars'), minRange, maxRange);
    res.json(cars);
})

router.get('/range/:minRange', (req, res) => {
    const minRange = parseInt(req.params.minRange);
    const cars = apiFn.getCarsWithRange(req.app.get('allCars'), minRange);
    res.json(cars);
})

router.get('/', (req, res) => {
    res.json(req.app.get('allCars'));
})

router.use('/', (err, req, res, next)=>{
    console.log(err);
    res.sendStatus(404);
});

module.exports = router;