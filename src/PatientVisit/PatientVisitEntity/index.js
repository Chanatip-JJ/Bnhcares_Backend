const buildGetPatientVisit = require('./patient-visit')
const buildGetPatientVisitResult = require('./patient-visit-result')

const makeGetPatientVisit = buildGetPatientVisit({})
const makeGetPatientVisitResult = buildGetPatientVisitResult({}) 



module.exports = {
    makeGetPatientVisit,
    makeGetPatientVisitResult
}

