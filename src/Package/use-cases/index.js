const PackageAccessDB = require('../data-access')

const makeListPackageID = require('./list-package-id')
const makeListPackage = require('./list-package')
const makeRemovePackage = require('./remove-package') 
const makeAddPackage = require('./add-package')
const makeEditPackage = require('./edit-package')

const {
    makePackage,
    makeGetPackage
} = require('../PackageEntity')

const listPackages = makeListPackage({PackageAccessDB,makeGetPackage})
const listPackageID = makeListPackageID({PackageAccessDB,makeGetPackage})
const removePackage = makeRemovePackage({PackageAccessDB,makeGetPackage})
const addPackage = makeAddPackage({PackageAccessDB,makePackage})
const editPackage = makeEditPackage({PackageAccessDB,makePackage,makeGetPackage})

module.exports = {
    listPackages,
    listPackageID,
    removePackage,
    addPackage,
    editPackage
}
