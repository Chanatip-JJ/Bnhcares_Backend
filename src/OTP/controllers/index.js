const {sendOTP,validateOTP} = require('../use-cases')


const makeGetOTP = require('./get-OTP')
const makePostValidateOTP = require('./post-validate-otp')

const getOTP = makeGetOTP({sendOTP})
const postValidateOTP = makePostValidateOTP({validateOTP})
module.exports = {
    getOTP,
    postValidateOTP
}