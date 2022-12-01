module.exports = function makeListDepartmentID({DepartmentCareProviderAccessDB}){
    return async function listDepartmentId({params} = {}){        
        if(!params){
            throw new Error('You must supply a location id.')
        }
        const LocationID = params.department_id
        console.log(LocationID)
        const Careprovider = await DepartmentCareProviderAccessDB.findCareProvider({LocationID})
        return Careprovider  
      }     
    }