const validator = require('validator')

const buildGetSpeciality = require('./speciality-for-get')
const {DateTime,FixedOffsetZone} = require('luxon')



const makeGetSpeciality = buildGetSpeciality({})


module.exports = {
    makeGetSpeciality
}

