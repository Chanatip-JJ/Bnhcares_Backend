const {PatientVisitAccessDB,PatientVisitResultAccessDB} = require('../data-access')

const makeListPatientVisit = require('./list-patient-visit')
const makeListPatientVisitResult = require('./list-patient-visit-result')
const makePDFPatientVisitResult = require('./list-patient-visit-result-download')
const makeListPatientVisitImage = require('./list-patient-visit-result-image')

const {
    makeGetPatientVisit,
    makeGetPatientVisitResult
} = require('../PatientVisitEntity')



const listPatientVisit = makeListPatientVisit({PatientVisitAccessDB,makeGetPatientVisit})
const listPatientVisitResult = makeListPatientVisitResult({PatientVisitResultAccessDB,makeGetPatientVisitResult})
const PDFPatientVisitResult = makePDFPatientVisitResult({PatientVisitResultAccessDB,makeGetPatientVisitResult})
const listPatientVisitImage = makeListPatientVisitImage({})



module.exports = {
    listPatientVisit,
    listPatientVisitResult,
    PDFPatientVisitResult,
    listPatientVisitImage
}

