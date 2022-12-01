const {listPackages,
      listPackageID,
      removePackage,
      addPackage,
      editPackage
      } = require('../use-cases');
      
const makeGetPackages = require('./get-packages');
const makeGetPackageID = require('./get-packageId')
const makeRemovePackage = require('./delete-package')
const makeAddPackage =require('./post-package')
const makeEditPackage = require('./patch-package')


const getPackage = makeGetPackages({listPackages});
const getPackageID = makeGetPackageID({listPackageID});
const deletePackage = makeRemovePackage({removePackage})
const postPackage = makeAddPackage({addPackage})
const patchPackage = makeEditPackage({editPackage})

module.exports = {
  getPackage,
  getPackageID,
  deletePackage,
  postPackage,
  patchPackage
};

