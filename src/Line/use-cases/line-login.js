const path = require('path')
require('dotenv').config({
    path: path.join(__dirname,'../../..','.env.development')
})

module.exports = function makeLineLogin({LineAccessDB, makeLine,jwt}){
    return async function LineLogin({body}){
        
        const LineEntity = makeLine(body)

        const exist = await LineAccessDB.check({LineEntity})

        if(!exist){
            throw new Error('Not found')
        }
        
        const {uid,
               PERSON_NO,
               hn,
               role,
               patient_uid,
               Feature} = exist[0]
        //Create Token
        const token = jwt.sign({id: uid,
                                person_id: PERSON_NO, 
                                hn: hn,
                                role: role,
                                patient_uid: patient_uid,
                                feature: JSON.parse(Feature) || null
                            }, process.env.TOKEN_SECRET_KEY, {expiresIn: 86400})      
        const user = {jwtToken : token, id: uid}
        return user;
    }
}