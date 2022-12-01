const {registerAccessDB , lineAccessDB} = require('../data-access')
const makeUserRegister = require('./add-register')
const makeCheckLine = require('./check-line')

const {
    makeRegister,
    makeLine
} = require('../registerEntity')

const userRegister = makeUserRegister({registerAccessDB, makeRegister})
const checkLine = makeCheckLine({lineAccessDB,makeLine})


module.exports = {
    userRegister,
    checkLine
}