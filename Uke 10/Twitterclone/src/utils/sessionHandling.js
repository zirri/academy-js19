const jwt = require('jsonwebtoken');

const secret = 'somethingsecret';


// function authenticate(req, res, next){
//     const token = req.headers['x-auth-token'];
//     try{
//     const { id, name, handle } = jwt.verify(token, new Buffer(secret, 'base64'));
//     req.user = { id, name, handle };
//     next();
//     }catch(error){
//         res.status(401)
//     }
// }

module.exports = {
    authenticate
}