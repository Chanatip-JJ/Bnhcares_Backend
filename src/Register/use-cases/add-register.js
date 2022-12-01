module.exports = function makeUserRegister({registerAccessDB, makeRegister}){
    return async function userRegister({userDetail}){ 
        const RegisterEntity = await makeRegister(userDetail)
        const existUser = await registerAccessDB.findExistUser({RegisterEntity})
        if(existUser !== undefined){
            throw new Error("userExist")
        }
        
        const userId = await registerAccessDB.insert({RegisterEntity})
        return userId
    }
}