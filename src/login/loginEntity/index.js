const bcrypt = require('bcrypt')
const buildGetLogin = require('./login')
const buildUser = require('./user')


const makeGetLogin = buildGetLogin()
const makeUser = buildUser({bcrypt})


module.exports = {
    makeGetLogin,
    makeUser
}