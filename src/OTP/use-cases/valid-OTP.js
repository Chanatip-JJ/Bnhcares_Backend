module.exports = function makeValidateOTP({OTPAccessDB,makeOTP}){
    return async function validateOTP({OTPdetail}){
            var existedOTP 
            const {email,telephone,OTP} = OTPdetail 
            const OTPEntity = makeOTP(OTPdetail)

            
            if(email){
                existedOTP = await OTPAccessDB.findByEmail({OTPEntity})
            }

            if(telephone){
                existedOTP = await OTPAccessDB.findByTelephone({OTPEntity})
            }


            if(!(existedOTP.OTP == OTP)){
                throw new Error('Wrong OTP')
            }

            return {message: 'Success'}
        
    }
}