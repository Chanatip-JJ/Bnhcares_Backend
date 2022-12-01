const validator = require('validator')
const buildCategory = require('./category')
const buildGetCategory = require('./category-for-get')
const {DateTime,FixedOffsetZone} = require('luxon')


const makeCategory = buildCategory({validator,DateTime,FixedOffsetZone})
const makeGetCategory = buildGetCategory({validator,DateTime,FixedOffsetZone})

module.exports = {
    makeCategory,
    makeGetCategory
}

