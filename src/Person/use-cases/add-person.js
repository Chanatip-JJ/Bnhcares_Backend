module.exports = function makeAddPerson({PersonAccessDB,makePerson}){
    return async function addPerson({personDetail}){
        const PersonEntity = makePerson(personDetail)
        await PersonAccessDB.insert({PersonEntity})
        return {
            message:'THe Person has successfully been added'
        }  
    }
}