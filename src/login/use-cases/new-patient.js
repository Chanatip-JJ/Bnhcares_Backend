
module.exports = function makeNewPatient({NewPatientAccessDB}){
    return async function editUser({params}){
        if(!params){
            throw new Error('ID must be supplied')
        }
        const newPatient = await NewPatientAccessDB.find(params)
        
        return newPatient 
    }
}