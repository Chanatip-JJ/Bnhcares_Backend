
module.exports = function buildSearchOrderHeader({validator,DateTime,FixedOffsetZone}) {
        return function makeSearchOrderHeader({
            order_id,
            HN,
            first_name,
            last_name,
            day,
            start_date,
            end_date,
    } = {}) {
        const adaptStartDate = adaptDate(start_date)
        const adaptEndDate = adaptDate(end_date)
        
        return Object.freeze({
            getORDER_ID: ()=> order_id || null,
            getHN: ()=> HN || null,
            getFirst_Name: ()=> first_name || null,
            getLast_Name: ()=> last_name || null,
            getDay: () => day || null,
            getStart_Date : () => adaptStartDate || null,
            getEnd_Date : () => adaptEndDate || null,
        })
    }
    function adaptDate(Date){
        if(!Date) return null;
        const luxon_date = DateTime.fromISO(Date).setZone(FixedOffsetZone.parseSpecifier("GMT+7")).startOf("day")
        const JS_Date = luxon_date.plus({ hours: 7 }).toJSDate();
        return JS_Date
    }
}

