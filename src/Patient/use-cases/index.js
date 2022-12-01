const {PatientAccessDB,PatientSearchAccessDB,checkPatientAccessDB} = require('../data-access')

const makeListPatientHN = require('./list-patient-hn')
const makeSearchPatient =require('./list-search-patient')
const makeListPatient = require('./list-patient-detail')
const {makeGetPatient} = require('../PatientEntity')



const listPatient = makeListPatientHN({PatientAccessDB,checkPatientAccessDB})
const listSearchPatient = makeSearchPatient({PatientSearchAccessDB,makeGetPatient})
const listPatientDetail = makeListPatient({checkPatientAccessDB})

module.exports = {
    listPatient,
    listSearchPatient,
    listPatientDetail
}

