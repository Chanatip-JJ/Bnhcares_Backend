const jwt = require('jsonwebtoken');
const path = require('path')

require('dotenv').config({
    path: path.join(__dirname,'../..','.env.development')
})

module.exports = function(req, res, next) {
    const token = req.header('auth-token')
    if(!token){
        return res.status(401).send("Access Denied")
    }
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET_KEY)
        req.user = verified
        next()
    } catch (err){
        res.status(400).send("Invalid Token")
    }
}    