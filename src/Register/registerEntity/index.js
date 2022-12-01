const bcrypt = require('bcrypt')
const buildRegister = require('./register')
const buildLine = require('./line')

const makeRegister = buildRegister({bcrypt})
const makeLine = buildLine({})

module.exports = {
    makeRegister,
    makeLine
}