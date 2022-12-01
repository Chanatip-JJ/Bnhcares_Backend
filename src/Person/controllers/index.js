const {listPerson,
      listPersonID,
      listPersonByTelephone,
      addPerson,
      editPerson,
      listPersonByEmail
      } = require('../use-cases');
      
const makeGetPerson = require('./get-person');
const makeGetPersonID = require('./get-personId')
const makeAddPerson =require('./post-person')
const makeEditPerson = require('./patch-person')
const makeGetPersonByTelephone = require('./get-person-by-telephone')
const makeGetPersonByEmail= require('./get-person-by-email')

const getPerson = makeGetPerson({listPerson});
const getPersonID = makeGetPersonID({listPersonID});
const getPersonByTelephone = makeGetPersonByTelephone({listPersonByTelephone})
const postPerson = makeAddPerson({addPerson})
const patchPerson = makeEditPerson({editPerson})
const getPersonByEmail = makeGetPersonByEmail({listPersonByEmail}) 

module.exports = {
  getPerson,
  getPersonID,
  postPerson,
  patchPerson,
  getPersonByTelephone,
  getPersonByEmail
};