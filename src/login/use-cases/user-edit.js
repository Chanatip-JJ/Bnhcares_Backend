module.exports = function makeUserEdit({UserAccessDB,makeUser}){
    return async function editUser({edit}){
        
        var UserEntity = await makeUser(edit)
        
        const existed = await UserAccessDB.findById({UserEntity})
        if(!existed[0]){
            throw new Error('User not exist')
        }
        const update = {...existed[0],...edit}
        var UserEntity = await makeUser(update)
        const updated = await UserAccessDB.update({UserEntity})
        return updated 
    }
}