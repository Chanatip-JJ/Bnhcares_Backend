module.exports = function makeListSpecialityID({SpecialityAccessDB,makeGetSpeciality}){
    return async function listSpecialityId({params} = {}){        
        if(!params){
            throw new Error('You must supply a location id.')
        }
        // params = {person_id:2}
        console.log(params)
        const SpecialityEntity = makeGetSpeciality({
          //! change id column
          uid : params.speciality_id
        })
        const Speciality = await SpecialityAccessDB.findById({SpecialityEntity})
        return Speciality  
      }     
    }