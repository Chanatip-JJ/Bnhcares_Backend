module.exports = function buildGetAdditionalCareprovider({}) {
        return function makeGetAdditionalCareprovider({
            uid,
            careprovider_uid_bconnect,
            isFullTime,
            graduate_institution,
            speciality,
            graduation_year,
            academic_prefix,
            clinical_interest,
            image,
            language
    } = {}) {
        
        return Object.freeze({
            getUID : () => uid || null,
            getCareprovider_uid : () => careprovider_uid_bconnect || null,
            getIsFullTime:() => isFullTime || null,
            getGraduationInstitution: () => graduate_institution || null,
            getSpeciality : () => speciality || null,
            getGraduationYear : () => graduation_year || null,
            getAcademicPrefix : () => academic_prefix || null,
            getClinicalInterest:() => clinical_interest || null,
            getImage : () => image || null,
            getLanguage : () => language || null,
        })
    }
}

