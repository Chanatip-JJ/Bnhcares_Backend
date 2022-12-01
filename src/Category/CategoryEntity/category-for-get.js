module.exports = function buildGetPackage({validator,DateTime,FixedOffsetZone}) {
        return function makeGetPackage({
            uid,
            category_priority,
            name_th,
            name_en,
            detail,
            status,
            start_date,
            end_date,
            image_url
    } = {}) {
        // const adaptedStartDate =  adaptDate(start_date)
        // const adaptedEndDate =  adaptDate(end_date)
        return Object.freeze({
            getuid: () =>  uid || null,
            getCategory_priority: ()  => category_priority || null,
            getname_th: () =>  name_th || null,
            getname_en: () =>  name_en || null,
            getImage_url:() => image_url || null,
            getdetail: () =>  detail || null,
            getStart_date:() => start_date || null,
            getEnd_date:() => end_date || null,
            getstatus: () =>  status || null
        })
    }
    // function adaptDate(Date){
    //     const luxon_date = DateTime.fromISO(Date).setZone(FixedOffsetZone.parseSpecifier("GMT+7")).startOf("day")
    //     const JS_Date = luxon_date.plus({ hours: 7 }).toJSDate()
    //     return JS_Date
    // }
}

