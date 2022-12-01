const validator = require('validator')
const buildCareProvider = require('./careprovider')
const buildGetCareProvider = require('./carprovider-for-get')
const {DateTime,FixedOffsetZone} = require('luxon')


const makeCareProvider = buildCareProvider({validator,DateTime,FixedOffsetZone})
const makeGetCareProvider = buildGetCareProvider({})


module.exports = {
    makeCareProvider,
    makeGetCareProvider
}

