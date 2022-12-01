const AdditionalCareproviderAccessDB = require('../data-access')

const makeListAdditionalCareprovider = require('./list-AdditionalCareprovider')
const makeAddAdditionalCareprovider = require('./add-AdditionalCareprovider')
const makeEditAdditionalCareprovider = require('./edit-AdditionalCareprovider')

const {
    makeAdditionalCareprovider,
    makeGetAdditionalCareprovider
} = require('../AdditionalCareproviderEntity')


const listAdditionalCareprovider = makeListAdditionalCareprovider({AdditionalCareproviderAccessDB,makeGetAdditionalCareprovider})
const addAdditionalCareprovider = makeAddAdditionalCareprovider({AdditionalCareproviderAccessDB,makeAdditionalCareprovider})
const editAdditionalCareprovider = makeEditAdditionalCareprovider({AdditionalCareproviderAccessDB,makeAdditionalCareprovider,makeGetAdditionalCareprovider})

module.exports = {
    listAdditionalCareprovider,
    addAdditionalCareprovider ,
    editAdditionalCareprovider
}
