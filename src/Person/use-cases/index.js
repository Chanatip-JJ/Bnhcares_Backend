const PersonAccessDB = require('../data-access')

const makeListPersonID = require('./list-person-id')
const makeListPerson = require('./list-person')
const makeAddPerson = require('./add-person')
const makeEditPerson = require('./edit-person')

const {
    makePerson,
    makeGetPerson
} = require('../personEntity')

const listPerson = makeListPerson({PersonAccessDB,makeGetPerson})
const listPersonID = makeListPersonID({PersonAccessDB,makeGetPerson})
const addPerson = makeAddPerson({PersonAccessDB,makePerson})
const editPerson = makeEditPerson({PersonAccessDB,makePerson,makeGetPerson})

module.exports = {
    listPerson,
    listPersonID,
    addPerson,
    editPerson
}

// a()
// async function a(){
//     const params = {
//         person_id: 1,
//     }
//     const b = await removePerson({params})
//     console.log(b)
    
// }


// f()
// async function f(){
//     const params = {
//         person_id : 2
//     }
//     const a = await listPersonID({params})
//     // const a = await PersonAccessDB.findById({
//     //     uid:1
//     // })
//     console.log(a)
// }

// remove()
// async function remove(){
//     const params = {
//         person_id : 2
//     }
//     const a = await removePerson({
//         :1
//     })
//     console.log(a)
// }

// test()
// async function remove(){
//     const params = {
//         person_id : 2
//     }
//     const a = await removePerson({
//         :1
//     })
//     console.log(a)
// }