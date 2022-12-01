/**
 * @swagger
 * components:
 *   schemas:
 *     OTP:
 *       type: object
 *       properties:
 *          email:
 *            type: string
 *          telephone:
 *            type: string
 *          OTP:
 *            type: string   
 */

module.exports = function buildOTP({}){
    return function makeOTP({
        telephone,
        email,
        OTP
    } = {}) {
        
        return Object.freeze({
            getEmail :() => email || null,
            getTelephone:() => telephone || null,
            getOTP:() => OTP || null
        })
    }
}