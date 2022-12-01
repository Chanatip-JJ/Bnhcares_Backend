const validator = require('validator')

const buildGetDepartment = require('./department-for-get')
const {DateTime,FixedOffsetZone} = require('luxon')



const makeGetDepartment = buildGetDepartment({})


module.exports = {
    makeGetDepartment
}

