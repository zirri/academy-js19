const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const twittercloneApi = require('./src/twittercloneApi');
const sessionHandling = require('./src/sessionApi');
const db = require('./src/databaseService');
const jwt = require('jsonwebtoken');

const secret = 'somethingsecret';

function authenticate(req, res, next){
    const token = req.headers['x-auth-token'];
    try{
        const { userId, name, handle } = jwt.verify(token, new Buffer(secret, 'base64'));
        req.user = { userId, name, handle };
        next();
    }catch(error){
        console.log(error)
        res.status(401).send({message: 'Unable to authenticate'})
    }
}

//Body parser
app.use(bodyParser.json());

//middleware
app.use('/', (req, res, next) =>{
    console.log(`Incoming request: type ${req.method}`);
    next();
})

app.post('/tweets', authenticate);

//routing
app.use('/tweets', twittercloneApi);

app.post('/session', async (req, res) => {
    const { handle, password } = req.body;
    const user = await db.getUserByHandle(handle);

    if(!user){
        return res.status(401).json({message: 'Unknown user'});
    }
    if(user.password !== password){
        return res.status(401).json({message: 'Wrong password'});
    }
    const token = jwt.sign({
        userId: user.id,
        handle: user.handle,
        name: user.name
    }, new Buffer(secret, 'base64'));
    res.json({token})
});

app.listen(port, () => {
    console.log(`Twitterclone is running on http://localhost:${port}`);
});