
const buildAdditionalCareprovider = require('./AdditionalCareprovider')
const buildGetAdditionalCareprovider = require('./AdditionalCareprovider-for-get')



const makeAdditionalCareprovider = buildAdditionalCareprovider({})
const makeGetAdditionalCareprovider = buildGetAdditionalCareprovider({})


module.exports = {
    makeAdditionalCareprovider,
    makeGetAdditionalCareprovider
}

