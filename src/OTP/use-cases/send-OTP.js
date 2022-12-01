const axios = require('axios').default
const querystring = require('querystring');
const path = require('path');

require('dotenv').config({
    path: path.join(__dirname,'..','..','..','.env')
})
module.exports = function makeSendOTP({OTPAccessDB,makeOTP,nodemailer}){
    return async function SendOTP({query}){
        if(!query){
            throw new Error('Telephone or Email must be supplied.')
        }
        
        const OTP = generateOTP()
        const {telephone,email} = query
        const OTPEntity = makeOTP({...query,OTP})

        
        if(email){
           await OTPAccessDB.upsertByEmail({OTPEntity})
           const respond = await sendOTPbyEmail(email,OTP)
           return respond
        }
             
        if(telephone){
           await OTPAccessDB.upsertByTelephone({OTPEntity})
           const respond = await sendOTPbySMS(telephone,OTP)
           return respond
        }
    
    }

    function generateOTP(){
        return Math.floor(100000 + Math.random() * 900000)
    }

    async function sendOTPbySMS(telephone,OTP){
        const options = {
            ACCOUNT : process.env.OTP_MOBILE_ACCOUNT,
            PASSWORD: process.env.OTP_MOBILE_PASSWORD,
            MOBILE:`${telephone}`,
            MESSAGE:`${OTP} is your OTP.\nPlease do not share it with anyone.`
          };
          
          const respond =  await axios.post(process.env.OTP_MOBILE_URL,querystring.stringify(options))
          
          return respond.data
    }

    async function sendOTPbyEmail(email,OTP){
        try{
        const mailOptions = {
            from: process.env.OTP_EMAIL_EMAIL, // sender
            to: email,                        // list of receivers
            subject: 'BNHCARES',            // Mail subject
            html: `<b>${OTP} is your OTP.\nPlease do not share it with anyone.</b>` // HTML body
          };
        
        const transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port:587,
            auth: {
              user: `${process.env.OTP_EMAIL_ACCOUNT}`, // your email
              pass: `${process.env.OTP_EMAIL_PASSWORD}` // your password
            }
          });
          const res = await transporter.sendMail(mailOptions)
          
          return res
        }
        catch(err){
             throw new Error(err)
        }
    }   

}