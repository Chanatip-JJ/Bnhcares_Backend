const jwt = require('jsonwebtoken');
const path = require('path')
require('dotenv').config({
    path: path.join(__dirname,'../..','.env.development')
})
const FeatureAccessDB = require('./data-access')
module.exports = async function checkPackageAccess(req, res, next) {
        const cookies = req.cookies
        try{
            const {jwtToken} = cookies.access_token 
            const decodedUser = jwt.verify(jwtToken, process.env.TOKEN_SECRET_KEY)
            const userFeature = await FeatureAccessDB.findUser({user_uid:decodedUser.id})
            if(userFeature.appointment != true){
                res.status().send('No authorization to access')
            }
            next()
        } catch (err){
            res.status(400).send('No authorization to access')
        }
}    