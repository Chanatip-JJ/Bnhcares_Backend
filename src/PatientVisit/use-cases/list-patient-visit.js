module.exports = function makeListPatientVisit({PatientVisitAccessDB,makeGetPatientVisit}){
    return async function listPatientVisit({query,params} = {}){        
        if(!params){
            throw new Error('You must supply patient id.')
        }
        const PatientVisitEntity = makeGetPatientVisit({...params,...query})
        const PatientVisit = await PatientVisitAccessDB.findAll({PatientVisitEntity})
       



        
        return  PatientVisit
      }     
    }