const {OTPAccessDB} = require('../data-access')

const makeSendOTP = require('./send-OTP')
const makeValidateOTP = require('./valid-OTP')
const nodemailer = require('nodemailer')
const {
    makeOTP
} = require('../OTPEntity')


const sendOTP = makeSendOTP({OTPAccessDB,makeOTP,nodemailer})
const validateOTP = makeValidateOTP({OTPAccessDB,makeOTP})
module.exports = {
    sendOTP,
    validateOTP
}