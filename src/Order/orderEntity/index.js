const validator = require('validator')
const buildOrderDetail = require('./orderDetail')
const buildGetOrderDetail = require('./orderDetail-for-get')
const buildOrderHeader = require('./orderHeader')
const buildGetOrderHeader = require('./orderHeader-for-get')
const buildSearchOrderHeader = require('./orderHeader-search')
const {DateTime,FixedOffsetZone} = require('luxon')


const makeOrderHeader = buildOrderHeader({validator,DateTime,FixedOffsetZone})
const makeGetOrderHeader = buildGetOrderHeader({})
const makeOrderDetail = buildOrderDetail({validator,DateTime,FixedOffsetZone})
const makeGetOrderDetail = buildGetOrderDetail({})
const makeSearchOrderHeader = buildSearchOrderHeader({validator,DateTime,FixedOffsetZone})

module.exports = {
    makeOrderHeader,
    makeGetOrderHeader,
    makeOrderDetail,
    makeGetOrderDetail,
    makeSearchOrderHeader
}

