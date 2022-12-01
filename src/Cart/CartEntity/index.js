const validator = require('validator')
const buildCart = require('./cart')
const buildGetCart = require('./cart-for-get')
const {DateTime,FixedOffsetZone} = require('luxon')


const makeCart = buildCart({})
const makeGetCart = buildGetCart({})



module.exports = {
    makeCart,
    makeGetCart
}

