module.exports = function makeListPatientHN({checkPatientAccessDB}){
    return async function listPatient({params} = {}){        
        if(!params){
            throw new Error('You must supply HN.')
        }
        
        const exist = await checkPatientAccessDB.GetByHN({HN:params.HN})
        
        return exist
      }     
    }