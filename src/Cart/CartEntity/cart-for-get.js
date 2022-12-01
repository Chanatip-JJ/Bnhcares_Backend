module.exports = function buildGetCart({}) {
        return function makeGetCart({
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

