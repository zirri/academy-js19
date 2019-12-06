const express = require('express');
const router = express.Router();
const utils = require('./utils');
const db = require('./databaseService');

//middleware
router.use('/*',(req, res, next)=>{
    try{
        utils.checkBodyInput(req.body);
        next();
    }catch (err){
        console.log(err.message);
        res.json({error: 'invalid format on input. Check all fields'});
    }
});

router.use('/:id',(req, res, next)=>{
    if(0<parseInt(req.params.id)<Infinity){
        next();
    }else{
        res.json({error:'invalid id/endpoint'});
    }
});

//no errorhandling

//Endpoints
router.get('/:id', async function (req, res, next) {
    const id = req.params.id;
    let movie = await db.getMovieByIdQuery(id);
    res.json(movie);
})

router.get('/', async function (req, res, next){
    try{
        let movies = await db.getMoviesQuery();
        res.json(movies);
     }catch(error){
        res.json({error: error.message})
    }
    
})

router.post('/', async function (req, res, next){
    let movie = req.body;
    try{
        let insertedMovie = await db.createMovieQuery(movie);
    res.json(insertedMovie);
    }catch(error){
        res.json({error: error.message})
    }
    
})

router.put('/:id', async function(req, res, next){
    const id = req.params.id;
    let movie = req.body;
    try{
        let editedMovie = await db.updateMovieQuery(id, movie);
        res.json(editedMovie);
    }catch(error){
        res.json({error: error.message});
    }
})

router.delete('/:id', async function (req, res, next){
    const id = req.params.id;
    //should return the deleted item
    try{
        await db.deleteMovieQuery(id);
        res.sendStatus(200);
    }catch(error){
        res.json({error: error.message});
    }
})

router.use('/*', function (error, req, res, next) {
    console.log(error.message);
    res.status(400).json({error: "Something went wrong"});
});

module.exports = router;