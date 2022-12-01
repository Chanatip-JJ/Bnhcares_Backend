//* swagger documentation --> Package  as below
/**
 * @swagger
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       properties:
 *          user_id:
 *            type: integer
 *          PERSON_NO:
 *            type: integer   
 *          package_uid:
 *            type: integer
 *          quantity:
 *            type: integer
 *          UTM_SOURCE:
 *            type: string
 *          UTM_MEDIUM:
 *            type: string
 *          UTM_CAMPAIGN:
 *            type: string    
 */
module.exports = function buildCart({validator,DateTime,FixedOffsetZone}) {
        return function makeCart({
            user_id,
            PERSON_NO,
            package_uid,
            quantity,
            UTM_SOURCE,
            UTM_MEDIUM,
            UTM_CAMPAIGN
    } = {}) {

        return Object.freeze({
            getuser_id: () =>  user_id || null,
            getPERSON_NO: () =>  PERSON_NO || null,
            getpackage_uid: () =>  package_uid || null,
            getquantity: () =>  quantity || null,
            getUTM_SOURCE: ()=> UTM_SOURCE || null,
            getUTM_MEDIUM: ()=> UTM_MEDIUM || null,
            getUTM_CAMPAIGN: ()=> UTM_CAMPAIGN || null
        })
    }
}

