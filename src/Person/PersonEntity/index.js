const validator = require('validator')
const buildPerson = require('./person')
const buildGetPerson = require('./person-for-get')
const {DateTime,FixedOffsetZone} = require('luxon')


const makePerson = buildPerson({validator,DateTime,FixedOffsetZone})
const makeGetPerson = buildGetPerson({})
// a()
// async function a(){
//     const query = {
//         uid: 1,
//         name_th : 'wwwwwww',
//         name_en :'eee'
//     }
//     const b = makePerson(query)
//     console.log(b.getNameTH())
// }


module.exports = {
    makePerson,
    makeGetPerson
}

