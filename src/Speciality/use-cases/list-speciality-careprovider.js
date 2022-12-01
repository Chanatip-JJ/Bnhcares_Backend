module.exports = function makeListSpecialityID({SpecialityCareProviderAccessDB}){
    return async function listSpecialityId({params} = {}){        
        if(!params){
            throw new Error('You must supply a location id.')
        }
        const SpecialityID = params.speciality_id
        const CareProvider = await SpecialityCareProviderAccessDB.findCareProvider({SpecialityID})
        return CareProvider  
      }     
    }