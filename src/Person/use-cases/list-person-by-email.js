module.exports = function makeListPersonByEmail({PersonAccessDB,makeGetPerson}){
    return async function listPersonsEmail({params} = {}){        
        if(!params){
            throw new Error('You must supply telephone number.')
        }
        const PersonEntity = makeGetPerson({
          PERSON_EMAIL : params.email
        })
        const Person = await PersonAccessDB.findByEmail({PersonEntity})
        
        return Person  
      }     
    }