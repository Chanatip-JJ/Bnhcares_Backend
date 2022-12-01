module.exports = function makeListPatientHN({PatientAccessDB,checkPatientAccessDB}){
    return async function listPatient({params} = {}){        
        if(!params){
            throw new Error('You must supply HN.')
        }
        
        const exist = await checkPatientAccessDB.checkByHN({HN:params.HN})

        if(exist){
           return { message : 'This HN are already registered.'} 
        }

        const patient = await PatientAccessDB.findByHN({HN:params.HN})
        return patient  
      }     
    }