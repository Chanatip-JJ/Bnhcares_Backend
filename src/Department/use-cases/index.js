const {DepartmentAccessDB,DepartmentCareProviderAccessDB} = require('../data-access')

const makeListDepartmentID = require('./list-department-id')
const makeListDepartment = require('./list-department')
const makeListCareProvider = require('./list-department-careprovider')

const {
    makeGetDepartment
} = require('../DepartmentEntity')



const listDepartment = makeListDepartment({DepartmentAccessDB,makeGetDepartment})
const listDepartmentID = makeListDepartmentID({DepartmentAccessDB,makeGetDepartment})
const listCareProvider = makeListCareProvider({DepartmentCareProviderAccessDB})

module.exports = {
    listDepartment,
    listDepartmentID,
    listCareProvider
}

