const path = require('path')
require('dotenv').config({
    path: path.join(__dirname,'../../..','.env.development')
})

module.exports = function makeUserLogin({LoginAccessDB, makeGetLogin, bcrypt, jwt}){
    return async function userLogin({body}){
        
        const LoginEntity = makeGetLogin({
            username: body.username
        })

        const user = await LoginAccessDB.findUser({LoginEntity})
        if(!user){
            throw new Error('user Not Found')
        }

        let plainPassword = body.password
        let hashedPassword = user.password

        let access = JSON.parse(user.Feature)
        const validPass = await bcrypt.compare(plainPassword,hashedPassword)
        if(validPass == false){
           throw new Error("Incorrect Password")
        }
        
        //Create Token
        const token = jwt.sign({id: user.uid,
                                person_id: user.PERSON_NO, 
                                hn:user.hn,
                                role:user.role,
                                patient_uid:user.patient_uid,
                                feature: access
                            }, process.env.TOKEN_SECRET_KEY, {expiresIn: 86400})      
        const cookies = {jwtToken : token, id: user.uid}
        return cookies;
    }
}