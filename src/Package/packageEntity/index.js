const validator = require('validator')
const buildPackage = require('./package')
const buildGetPackage = require('./package-for-get')
const {DateTime,FixedOffsetZone} = require('luxon')


const makePackage = buildPackage({validator,DateTime,FixedOffsetZone})
const makeGetPackage = buildGetPackage({})



module.exports = {
    makePackage,
    makeGetPackage
}

