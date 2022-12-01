module.exports = function makeListPatientVisitResultDownLoad({PatientVisitResultAccessDB,makeGetPatientVisitResult}){
    return async function PatientVisitResult({query,params} = {}){
        if(!params){
            throw new Error('You must supple patient-visit id')
        }
        if(query.result_type !== 'Download'){
            throw new Error('Wrong type of result.')  
        }
        const PatientVisitResultEntity = makeGetPatientVisitResult({...query,...params})
        var Results =  await PatientVisitResultAccessDB.findResult({PatientVisitResultEntity})
        
        // formatting PDF





        return Results
    }
}