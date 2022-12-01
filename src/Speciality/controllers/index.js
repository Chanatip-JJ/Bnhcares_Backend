const {listSpeciality,
      listSpecialityID,
      searchSpeciality,
      listCareProvider
      } = require('../use-cases');
      
const makeGetSpeciality = require('./get-speciality');
const makeGetSpecialityID = require('./get-specialityId')
const makeSearchSpeciality = require('./get-search-speciality')
const makeGetCareProvider = require('./get-speciality-careprovider')

const getSpeciality = makeGetSpeciality({listSpeciality});
const getSpecialityID = makeGetSpecialityID({listSpecialityID});
const getSearchSpeciality = makeSearchSpeciality({searchSpeciality})
const getCareProvider = makeGetCareProvider({listCareProvider})





module.exports = {
  getSpeciality,
  getSpecialityID,
  getSearchSpeciality,
  getCareProvider
};

