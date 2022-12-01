const {userRegister,
       checkLine} = require('../use-cases')

const makePostRegister = require('./post-register')
const makeGetLine = require('./get-line')

const getLine = makeGetLine({checkLine})
const postRegister = makePostRegister({userRegister})



module.exports = {
    postRegister,
    getLine
}