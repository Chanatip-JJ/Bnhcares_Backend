const validator = require('validator')
const buildPackage = require('./package')
const buildGetPackage = require('./package-for-get')
const {DateTime,FixedOffsetZone} = require('luxon')


const makePackage = buildPackage({validator,DateTime,FixedOffsetZone})
const makeGetPackage = buildGetPackage({})
// a()
// async function a(){
//     const query = {
//         uid: 1,
//         name_th : 'wwwwwww',
//         name_en :'eee'
//     }
//     const b = makePackage(query)
//     console.log(b.getNameTH())
// }


module.exports = {
    makePackage,
    makeGetPackage
}

