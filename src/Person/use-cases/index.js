const PersonAccessDB = require('../data-access')

const makeListPersonID = require('./list-person-id')
const makeListPerson = require('./list-person')
const makeAddPerson = require('./add-person')
const makeEditPerson = require('./edit-person')
const makeListPersonByTelephone = require('./list-person-by-telephone')
const makeListPersonByEmail = require('./list-person-by-email')

const {
    makePerson,
    makeGetPerson
} = require('../personEntity')

const listPerson = makeListPerson({PersonAccessDB,makeGetPerson})
const listPersonID = makeListPersonID({PersonAccessDB,makeGetPerson})
const listPersonByTelephone = makeListPersonByTelephone({PersonAccessDB,makeGetPerson})
const listPersonByEmail = makeListPersonByEmail({PersonAccessDB,makeGetPerson})
const addPerson = makeAddPerson({PersonAccessDB,makePerson})
const editPerson = makeEditPerson({PersonAccessDB,makePerson,makeGetPerson})

module.exports = {
    listPerson,
    listPersonID,
    addPerson,
    editPerson,
    listPersonByTelephone,
    listPersonByEmail
}