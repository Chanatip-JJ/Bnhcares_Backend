//* swagger documentation --> Category  as below
/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       properties:
 *          uid:
 *            type: integer
 *          category_priority:
 *            type: integer  
 *          name_th:
 *            type: string   
 *          name_en:
 *            type: string
 *          image_url:
 *            type: string
 *          detail:
 *            type: string
 *          start_time:
 *            type: date-time
 *          end_time:
 *            type: date-time          
 *          status:
 *            type: string         
 */
module.exports = function buildCategory({validator,DateTime,FixedOffsetZone}) {
        return function makeCategory({
            uid,
            category_priority,
            name_th,
            name_en,
            image_url,
            detail,
            start_date,
            end_date,
            status

    } = {}) {
        const adaptedStartDate =  adaptDate(start_date)
        const adaptedEndDate =  adaptDate(end_date)
        return Object.freeze({
            getuid: () =>  uid || null,
            getCategory_priority: ()  => category_priority || null,
            getname_th: () =>  name_th || null,
            getname_en: () =>  name_en || null,
            getImage_url:() => image_url || null,
            getdetail: () =>  detail || null,
            getStart_date:() => adaptedStartDate || null,
            getEnd_date:() => adaptedEndDate || null,
            getstatus: () =>  status || null
        })
    }
    function adaptDate(Date){
        const luxon_date = DateTime.fromISO(Date).setZone(FixedOffsetZone.parseSpecifier("GMT+7")).startOf("day")
        const JS_Date = luxon_date.plus({ hours: 7 }).toJSDate()
        return JS_Date
    }
}

