module.exports = function makeListPerson({PersonAccessDB,makeGetPerson}){
    return async function listPersons({query} = {}){
        const PersonEntity = makeGetPerson(query)
        const Person =  await PersonAccessDB.findAll({PersonEntity})
        return Person
             
    }
}