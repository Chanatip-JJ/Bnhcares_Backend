const {listCareProvider,
      listCareProviderID,
      editCareProvider,
      listSearchCareProvider,
      listLocation,
      listWorkingHour
      } = require('../use-cases');
      
const makeGetCareProvider = require('./get-careprovider');
const makeGetCareProviderID = require('./get-careproviderId')
const makeEditCareProvider = require('./patch-careprovider')
const makeSearchCareProvider = require('./search-careprovider')
const makeGetLocation = require('./get-location')
const makeGetWorkingHour = require('./get-working-hour')


const getCareProvider = makeGetCareProvider({listCareProvider});
const getCareProviderID = makeGetCareProviderID({listCareProviderID});
const patchCareProvider = makeEditCareProvider({editCareProvider});
const searchCareProvider = makeSearchCareProvider({listSearchCareProvider})
const getLocation = makeGetLocation({listLocation})
const getWorkingHour = makeGetWorkingHour({listWorkingHour})


module.exports = {
  getCareProvider,
  getCareProviderID,
  patchCareProvider,
  searchCareProvider,
  getLocation,
  getWorkingHour
};

