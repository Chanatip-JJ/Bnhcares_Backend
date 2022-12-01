/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       properties:
 *          uid:
 *            type: integer 
 *          password:
 *            type: string
 *          hn:
 *            type: string
 *          patient_uid:
 *            type: integer
 *          careprovider_uid:
 *            type: integer 
 *          email:
 *            type: string
 *          OTP:
 *            type: string    
 */

module.exports = function buildNewPatient({bcrypt}){
    return async function makeUser({
        uid,
        hn,
        password,
        patient_uid,
        line_id,
    } = {}) {

        if(password){
            if(!password.startsWith('$2b$10$')) {
                password = await bcrypt.hash(password, 10)
            }
        }
        return Object.freeze({
            getUID :() => uid,
            getHN:() => hn || null,
            getPassword:() => password || null,
            getPatientUID:() => patient_uid || null,
            getLineID:() => line_id || null,
        })
    }
}