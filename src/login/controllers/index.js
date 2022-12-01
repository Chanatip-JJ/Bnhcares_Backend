const {userLogin,editUser,newPatient,forgetPassword} = require('../use-cases')

const makeGetUser = require('./get-user')
const makePatchUser = require('./patch-user')
const makeGetNewPatient = require('./get-new-patient')
const makePostForgetPassword = require('./post-forget-password')


const getUser = makeGetUser({userLogin})
const patchUser = makePatchUser({editUser})
const getNewPatient = makeGetNewPatient({newPatient})
const postForgetPassword = makePostForgetPassword({forgetPassword})


module.exports = {
    getUser,
    patchUser,
    getNewPatient,
    postForgetPassword
}