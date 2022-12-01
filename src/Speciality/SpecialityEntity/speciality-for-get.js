module.exports = function buildGetSpeciality({}) {
        return function makeGetSpeciality({
            uid,
            uid_bconnect,
            uid_trakcare,
            name,
            enable_status,
            description,
            status,
            search_value     
    } = {}) {
        return Object.freeze({
            getuid: () =>  uid || null,
            getuid_bconnect: () =>  uid_bconnect || null,
            getuid_trakcare: () =>  uid_trakcare || null,
            getname: () =>  name || null,
            getenable_status: () =>  enable_status || null,
            getdescription: () =>  description || null,
            getstatus: () =>  status || null,
            getsearch_value: () => search_value || null
        })
    }
}

