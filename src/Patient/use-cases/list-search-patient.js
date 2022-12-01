module.exports = function makeListPatientHN({PatientSearchAccessDB,makeGetPatient}){
    return async function listPatient({query} = {}){    
        const PatientEntity = makeGetPatient(query)
        const patient = await PatientSearchAccessDB.find({PatientEntity})
        return patient  
      }     
    }