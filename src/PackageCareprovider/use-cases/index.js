const PackageCareProviderAccessDB = require('../data-access')

const makeListCareprovider = require('./list-careprovider')
const makeListCareproviderID = require('./list-carerprovider-id')
const makeRemovePackageCareprovider = require('./remove-package-careprovider') 
const makeAddPackageCareprovider = require('./add-package-careprovider')
const makeEditPackageCareprovider = require('./edit-package-careprovider')

const {
    makePackageCareProvider,
    makeGetPackageCareProvider
} = require('../PackageCareProviderEntity')

const listCareprovider = makeListCareprovider({PackageCareProviderAccessDB,makeGetPackageCareProvider})
const listCareproviderID = makeListCareproviderID({PackageCareProviderAccessDB,makeGetPackageCareProvider})
const removePackageCareprovider = makeRemovePackageCareprovider({PackageCareProviderAccessDB,makeGetPackageCareProvider})
const addPackageCareprovider = makeAddPackageCareprovider({PackageCareProviderAccessDB,makePackageCareProvider})
const editPackageCareprovider = makeEditPackageCareprovider({PackageCareProviderAccessDB,makePackageCareProvider,makeGetPackageCareProvider})

module.exports = {
    listCareprovider,
    listCareproviderID,
    removePackageCareprovider,
    addPackageCareprovider,
    editPackageCareprovider
}
