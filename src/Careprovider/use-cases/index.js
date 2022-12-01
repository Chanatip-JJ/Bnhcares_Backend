const {CareProviderAccessDB,LocationAccessDB,WorkingHourAccessDB} = require('../data-access')

const makeListCareProviderID = require('./list-careprovider-id')
const makeListCareProvider = require('./list-careprovider')
const makeEditCareProvider = require('./edit-careprovider')
const makeSearchCareProvider = require('./search-careprovider')
const makeListLocation = require('./list-location')
const makeListWorkingHour = require('./list-working-hour')
const {
    makeCareProvider,
    makeGetCareProvider
} = require('../careproviderEntity')
const DoctorAppointmentManagementAccessDB = require('../../DoctorAppointmentManagement/data-access')
const {makeGetDoctorAppointmentManagement} = require('../../DoctorAppointmentManagement/DoctorAppointmentManagementEntity')



const listCareProvider = makeListCareProvider({CareProviderAccessDB,makeGetCareProvider})
const listCareProviderID = makeListCareProviderID({CareProviderAccessDB,makeGetCareProvider})
const editCareProvider = makeEditCareProvider({CareProviderAccessDB,makeCareProvider,makeGetCareProvider})
const listSearchCareProvider = makeSearchCareProvider({CareProviderAccessDB,makeGetCareProvider})
const listLocation = makeListLocation({LocationAccessDB})
const listWorkingHour = makeListWorkingHour({WorkingHourAccessDB,DoctorAppointmentManagementAccessDB,makeGetDoctorAppointmentManagement})

module.exports = {
    listCareProvider,
    listCareProviderID,
    editCareProvider,
    listSearchCareProvider,
    listLocation,
    listWorkingHour
}

