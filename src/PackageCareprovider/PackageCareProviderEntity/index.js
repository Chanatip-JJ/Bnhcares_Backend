const buildPackageCareProvider = require('./package-careprovider')
const buildGetPackageCareProvider = require('./package-careprovider-for-get')



const makePackageCareProvider = buildPackageCareProvider({})
const makeGetPackageCareProvider = buildGetPackageCareProvider({})



module.exports = {
    makePackageCareProvider,
    makeGetPackageCareProvider
}

