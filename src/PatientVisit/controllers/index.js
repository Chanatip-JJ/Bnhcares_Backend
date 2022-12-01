const { listPatientVisit,
        listPatientVisitResult,
        PDFPatientVisitResult,
        listPatientVisitImage
      } = require('../use-cases');
      
const makeGetPatientVisit = require('./get-patient-visit');
const makeGetPatientVisitResult = require('./get-patient-visit-result')
const makeGetPatientVisitResultDownload = require('./get-patient-visit-result-download')
const makeGetPatientVisitResultImage = require('./get-patient-visit-result-image')



const getPatientVisit = makeGetPatientVisit({listPatientVisit});
const getPatientVisitResult = makeGetPatientVisitResult({listPatientVisitResult});
const getPatientVisitResultDownload = makeGetPatientVisitResultDownload({PDFPatientVisitResult})
const getPatientVisitResultImage = makeGetPatientVisitResultImage({listPatientVisitImage})
module.exports = {
  getPatientVisit,
  getPatientVisitResult,
  getPatientVisitResultDownload,
  getPatientVisitResultImage
};

