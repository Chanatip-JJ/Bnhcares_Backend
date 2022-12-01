module.exports = function makeListPersonByTelephone({PersonAccessDB,makeGetPerson}){
    return async function listPersonsId({params} = {}){        
        if(!params){
            throw new Error('You must supply telephone number.')
        }
       
        const PersonEntity = makeGetPerson({
          PERSON_MOBILE : params.telephone
        })
        const Person = await PersonAccessDB.findByTelephone({PersonEntity})
        
        return Person  
      }     
    }