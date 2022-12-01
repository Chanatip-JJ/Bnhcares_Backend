//* swagger documentation --> Package  as below
/**
 * @swagger
 * components:
 *   schemas:
 *     PackageCareprovider:
 *       type: object
 *       properties:
 *          uid:
 *            type: integer
 *          package_uid:
 *            type: integer
 *          careprovider_uid:
 *            type: integer
 *          location_uid:
 *            type: integer    
 */
module.exports = function buildPackageCareProvider({}) {
        return function makePackageCareProvider({
            uid,
            package_uid,
            careprovider_uid,
            location_uid 
    } = {}) {
         
        if(!package_uid){
            throw new Error('Package id must be supplied')
        }

        if(!careprovider_uid){
            throw new Error('Careprovider id must be supplied')
        }

        if(!location_uid){
            throw new Error('Location id must be supplied')
        }
        return Object.freeze({
            getUID : () =>  uid || null,
            getPackageUID:() => +package_uid || null,
            getCareproviderUID:() => +careprovider_uid || null,
            getLocationUID: () => +location_uid || null
        })
    }
}

