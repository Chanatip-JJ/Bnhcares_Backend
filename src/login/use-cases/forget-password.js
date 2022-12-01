
module.exports = function makeForgetPassword({UserAccessDB,makeUser}){
    return async function forgetPassword({body}){
        if(!body){
            throw new Error('Hn or Username must be supplied')
        }
        var UserEntity = await makeUser(body)
        
        const user = await UserAccessDB.findByHNorUsername({UserEntity})
        
        return user 
    }
}