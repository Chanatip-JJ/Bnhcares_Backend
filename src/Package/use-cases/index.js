const PackageAccessDB = require('../data-access')
//const makeListAllPackage = require('./listAll-package')
const makeListPackageID = require('./list-package-id')
const makeListPackage = require('./list-package')
const makeRemovePackage = require('./remove-package') 
const makeAddPackage = require('./add-package')
const makeEditPackage = require('./edit-package')

const {
    makePackage,
    makeGetPackage
} = require('../packageEntity')

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

// a()
// async function a(){
//     const params = {
//         package_id: 1,
//     }
//     const b = await removePackage({params})
//     console.log(b)
    
// }


// f()
// async function f(){
//     const params = {
//         package_id : 2
//     }
//     const a = await listPackageID({params})
//     // const a = await PackageAccessDB.findById({
//     //     uid:1
//     // })
//     console.log(a)
// }

// remove()
// async function remove(){
//     const params = {
//         package_id : 2
//     }
//     const a = await removePackage({
//         :1
//     })
//     console.log(a)
// }

// test()
// async function remove(){
//     const params = {
//         package_id : 2
//     }
//     const a = await removePackage({
//         :1
//     })
//     console.log(a)
// }