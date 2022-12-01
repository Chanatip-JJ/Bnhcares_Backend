module.exports = function buildGetPackageCareProvider({}) {
        return function makeGetPackageCareProvider({
        uid,
        package_uid,
        careprovider_uid,
        location_uid    
    } = {}) {
        
        return Object.freeze({
            getUID : () => uid || null,
            getPackageUID:() => package_uid || null,
            getCareproviderUID:() => careprovider_uid || null,
            getLocationUID: () => location_uid || null
        })
    }
}

