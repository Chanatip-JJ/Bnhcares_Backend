const {
        listPatient,
        listSearchPatient,
        listPatientDetail
      } = require('../use-cases');
      

const makeGetPatientHN = require('./get-patient-hn')
const makeGetSearchPatient = require('./get-search-patient')
const makeGetPatient = require('./get-patient')

const getPatientHN = makeGetPatientHN({listPatient});
const getPatient = makeGetSearchPatient({listSearchPatient})
const getPatientUser = makeGetPatient({listPatientDetail})

module.exports = {
    getPatientHN,
    getPatient,
    getPatientUser
};

