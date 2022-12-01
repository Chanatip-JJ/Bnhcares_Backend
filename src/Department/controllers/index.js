const {listDepartment,
      listDepartmentID,
      listCareProvider
      } = require('../use-cases');
      
const makeGetDepartment = require('./get-department');
const makeGetDepartmentID = require('./get-departmentId')
const makeGetCareProvider = require('./get-careprovider')

const getDepartment = makeGetDepartment({listDepartment});
const getDepartmentID = makeGetDepartmentID({listDepartmentID});
const getCareProviderInDepartment =  makeGetCareProvider({ listCareProvider});

module.exports = {
  getDepartment,
  getDepartmentID,
  getCareProviderInDepartment
};

