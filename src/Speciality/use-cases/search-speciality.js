module.exports = function makeSearchSpeciality({SpecialityAccessDB, makeGetSpeciality}){
    return async function searchSpeciality({query} = {}){
        const SpecialityEntity = makeGetSpeciality(query)
        const Speciality = await SpecialityAccessDB.search({SpecialityEntity})
        return Speciality
    }
}