module.exports = function makeListSpeciality({SpecialityAccessDB,makeGetSpeciality}){
    return async function listSpecialitys({query} = {}){
        const SpecialityEntity = makeGetSpeciality(query)
        const Speciality =  await SpecialityAccessDB.findAll({SpecialityEntity})
        return Speciality         
    }
}