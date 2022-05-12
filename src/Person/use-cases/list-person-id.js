module.exports = function makeListPersonID({PersonAccessDB,makeGetPerson}){
    return async function listPersonsId({params} = {}){        
        if(!params){
            throw new Error('You must supply a person id.')
        }
        // params = {person_id:2}
        console.log(params)
        const PersonEntity = makeGetPerson({
          PERSON_NO : params.person_id
        })
        const Person = await PersonAccessDB.findById({PersonEntity})
        console.log(Person)
        return Person  
      }     
    }