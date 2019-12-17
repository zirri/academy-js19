const express = require('express');
const router = express.Router();
const db = require('./databaseService');


router.get('/', async (req, res) => {
    const tweets = await db.getAllTweets();
    res.json(tweets)
})

router.get('/:handle', async (req, res) => {
    const handle = req.params.handle;
    const tweets = await db.getTweetsByUser(handle);
    res.json(tweets)
})

router.post('/', async (req,res)=>{
    const { message, user } = req.body;
    const tweet = await db.insertNewTweet(message, user.id);
    res.json(tweet);
})

module.exports = router;
