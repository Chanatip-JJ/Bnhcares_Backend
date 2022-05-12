const {listPerson,
      listPersonID,
      addPerson,
      editPerson
      } = require('../use-cases');
      
const makeGetPerson = require('./get-person');
const makeGetPersonID = require('./get-personId')
const makeAddPerson =require('./post-person')
const makeEditPerson = require('./patch-person')


const getPerson = makeGetPerson({listPerson});
const getPersonID = makeGetPersonID({listPersonID});
const postPerson = makeAddPerson({addPerson})
const patchPerson = makeEditPerson({editPerson})

module.exports = {
  getPerson,
  getPersonID,
  postPerson,
  patchPerson
};

// getID()
// async function a(){
//     const httpRequest = {
//         params:{
//           person_id:'2'
//         }
//     }
//     const b = await getPersonID(httpRequest)
//     console.log(b)
    
// }


// getPerson()
// async function b(){
//     const httpRequest = {
    
//     }
//     const b = await getPerson(httpRequest)
//     console.log(b)
    
// }