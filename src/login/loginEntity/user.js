/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       properties:
 *          uid:
 *            type: integer
 *          username:
 *            type: string    
 *          password:
 *            type: string
 *          hn:
 *            type: string
 *          patient_uid:
 *            type: integer
 *          line_id:
 *            type: string
 *          pincode:
 *            type: string
 */

module.exports = function buildUser({bcrypt}){
    return async function makeUser({
        uid,
        hn,
        username,
        password,
        patient_uid,
        line_id,
        pincode
    } = {}) {

        if(password){
            if(!password.startsWith('$2b$10$')) {
                password = await bcrypt.hash(password, 10)
            }
        }
        return Object.freeze({
            getUID :() => uid,
            getUsername:()=> username || null,
            getHN:() => hn || null,
            getPassword:() => password || null,
            getPatientUID:() => patient_uid || null,
            getLineID:() => line_id || null,
            getPincode:() => pincode || null
        })
    }
}