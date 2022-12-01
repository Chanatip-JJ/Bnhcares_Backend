const {
        listAdditionalCareprovider,
        addAdditionalCareprovider,
        editAdditionalCareprovider
      } = require('../use-cases');
      

const makeGetAdditionalCareprovider = require('./get-AdditionalCareprovider')
const makeAddAdditionalCareprovider = require('./post-AdditionalCareprovider.js')
const makeEditAdditionalCareprovider = require('./patch-AdditionalCareprovider.js')



const getAdditionalCareprovider = makeGetAdditionalCareprovider({listAdditionalCareprovider});
const postAdditionalCareprovider = makeAddAdditionalCareprovider({addAdditionalCareprovider})
const patchAdditionalCareprovider = makeEditAdditionalCareprovider({editAdditionalCareprovider})

module.exports = {
  getAdditionalCareprovider,
  postAdditionalCareprovider,
  patchAdditionalCareprovider
};

