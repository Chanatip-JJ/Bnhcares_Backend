const {listCareprovider,
       listCareproviderID,
       addPackageCareprovider,
       editPackageCareprovider,
       removePackageCareprovider
      } = require('../use-cases');
      
const makeGetPackageCareprovider = require('./get-packages-careprovider');
const makeGetPackageCareproviderID = require('./get-packageId-careprovider')
const makeRemovePackageCareprovider = require('./delete-package-careprovider')
const makeAddPackageCareprovider =require('./post-package-careprovider')
const makeEditPackageCareprovider = require('./patch-package-careprovider')


const getCareprovider = makeGetPackageCareprovider({listCareprovider});
const getPackageCareproviderID = makeGetPackageCareproviderID({listCareproviderID});
const deletePackageCareprovider = makeRemovePackageCareprovider({removePackageCareprovider})
const postCareprovider = makeAddPackageCareprovider({addPackageCareprovider})
const patchCareprovider = makeEditPackageCareprovider({editPackageCareprovider})

module.exports = {
  getCareprovider,
  getPackageCareproviderID,
  deletePackageCareprovider,
  postCareprovider,
  patchCareprovider
};

