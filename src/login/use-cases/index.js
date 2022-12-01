const {LoginAccessDB,UserAccessDB,NewPatientAccessDB} = require('../data-access')
const makeUserLogin = require('./user-login')
const makeEditUser = require('./user-edit')
const makeNewPatient = require('./new-patient')
const makeForgetPassword = require('./forget-password')


const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const {
    makeGetLogin,
    makeUser
} = require('../loginEntity')

const userLogin = makeUserLogin({LoginAccessDB, makeGetLogin, bcrypt, jwt})
const editUser = makeEditUser({UserAccessDB,makeUser})
const newPatient = makeNewPatient({NewPatientAccessDB})
const forgetPassword = makeForgetPassword({UserAccessDB,makeUser})

 

module.exports = {
    userLogin,
    editUser,
    newPatient,
    forgetPassword
}