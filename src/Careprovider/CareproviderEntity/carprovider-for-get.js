module.exports = function buildGetCareProvider({}) {
        return function makeGetCareProvider({
            uid,
            uid_bconnect,
            uid_trackcare,
            title_th,
            firstname_th,
            middlename_th,
            lastname_th,
            title_en,
            firstname_en,
            middlename_en,
            lastname_en,
            gender,
            description_th,
            description_en,
            specialty_type,
            clinical_type,
            status,
            license_no,
            native_language,
            search_value
    } = {}) {
        
        return Object.freeze({
            getuid: () =>  uid || null,
            getuid_bconnect: () =>  uid_bconnect || null,
            getuid_trackcare: () =>  uid_trackcare || null,
            gettitle_th: () =>  title_th || null,
            getfirstname_th: () =>  firstname_th || null,
            getmiddlename_th: () =>  middlename_th || null,
            getlastname_th: () =>  lastname_th || null,
            gettitle_en: () =>  title_en || null,
            getfirstname_en: () =>  firstname_en || null,
            getmiddlename_en: () =>  middlename_en || null,
            getlastname_en: () =>  lastname_en || null,
            getgender: () =>  gender || null,
            getdescription_th: () =>  description_th || null,
            getdescription_en: () =>  description_en || null,
            getspecialty_type: () =>  specialty_type || null,
            getclinical_type: () =>  clinical_type || null,
            getstatus: () =>  status || null,
            getlicense_no: () =>  license_no || null,
            getnative_language: () =>  native_language || null,
            getsearch_value: () => search_value || null 
        })
    }
}

