const {SpecialityAccessDB,SpecialityCareProviderAccessDB} = require('../data-access')

const makeListSpecialityID = require('./list-speciality-id')
const makeListSpeciality = require('./list-speciality')
const makeSearchSpeciality = require('./search-speciality')
const makeListCareProvider = require('./list-speciality-careprovider')

const {
    makeGetSpeciality
} = require('../SpecialityEntity')



const listSpeciality = makeListSpeciality({SpecialityAccessDB,makeGetSpeciality})
const listSpecialityID = makeListSpecialityID({SpecialityAccessDB,makeGetSpeciality})
const searchSpeciality = makeSearchSpeciality({SpecialityAccessDB,makeGetSpeciality})
const listCareProvider = makeListCareProvider({SpecialityCareProviderAccessDB})

module.exports = {
    listSpeciality,
    listSpecialityID,
    searchSpeciality,
    listCareProvider
}

