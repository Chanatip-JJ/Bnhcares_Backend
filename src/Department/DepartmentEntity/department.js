//* swagger documentation --> location as below
/**
 * @openapi
 * components:
 *   schemas:
 *     Department:
 *       type: object
 *       properties:
 *          uid:
 *            type: integer
 *          uid_bconnect:
 *            type: integer
 *          uid_trackcare:
 *            type: integer               
 *          thai_name:
 *            type: string  
 *          english_name:
 *            type: string   
 *          floor:
 *            type: string
 *          zone:
 *            type: string 
 *          phone_no:
 *            type: string  
 *          monday_starttime:
 *            type: string
 *            format: date-time     
 *          monday_endtime:
 *            type: string
 *            format: date-time  
 *          tuesday_starttime:
 *            type: string
 *            format: date-time  
 *          tuesday_endtime:
 *            type: string
 *            format: date-time     
 *          wednesday_starttime:
 *            type: string
 *            format: date-time     
 *          wednesday_endtime:
 *            type: string
 *            format: date-time    
 *          thursday_starttime:
 *            type: string
 *            format: date-time    
 *          thursday_endtime:
 *            type: string
 *            format: date-time     
 *          friday_starttime:
 *            type: string
 *            format: date-time     
 *          friday_endtime:
 *            type: string
 *            format: date-time     
 *          sathurday_starttime:
 *            type: string
 *            format: date-time     
 *          sathurday_endtime:
 *            type: string
 *            format: date-time  
 *          sunday_starttime:
 *            type: string
 *            format: date-time  
 *          sunday_endtime:
 *            type: string
 *            format: date-time  
 *          email:
 *            type: string               
 *          sap_cost_code:
 *            type: string              
 *          description_th:
 *            type: string              
 *          description_en:
 *            type: string  
 *          img:
 *            type: buffer
 *          status:
 *            type: string               
 */
module.exports = function buildDepartment({validator,DateTime,FixedOffsetZone}) {
    return function makeDepartment({
        uid,
        uid_bconnect,
        uid_trakcare,
        thai_name,
        english_name,
        floor,
        zone,
        phone_no,
        monday_starttime,
        monday_endtime,
        tuesday_starttime,
        tuesday_endtime,
        wednesday_starttime,
        wednesday_endtime,
        thursday_starttime,
        thursday_endtime,
        friday_starttime,
        friday_endtime,
        sathurday_starttime,
        sathurday_endtime,
        sunday_starttime,
        sunday_endtime,
        email,
        sap_cost_code,
        description_th,
        description_en,
        img,
        status 
            } = {}) {
        return Object.freeze({
        getuid: () =>  uid || null,
        getuid_bconnect: () =>  uid_bconnect || null,
        getuid_trakcare: () =>  uid_trakcare || null,
        getthai_name: () =>  thai_name || null,
        getenglish_name: () =>  english_name || null,
        getfloor: () =>  floor || null,
        getzone: () =>  zone || null,
        getphone_no: () =>  phone_no || null,
        getmonday_starttime: () =>  monday_starttime || null,
        getmonday_endtime: () =>  monday_endtime || null,
        gettuesday_starttime: () =>  tuesday_starttime || null,
        gettuesday_endtime: () =>  tuesday_endtime || null,
        getwednesday_starttime: () =>  wednesday_starttime || null,
        getwednesday_endtime: () =>  wednesday_endtime || null,
        getthursday_starttime: () =>  thursday_starttime || null,
        getthursday_endtime: () =>  thursday_endtime || null,
        getfriday_starttime: () =>  friday_starttime || null,
        getfriday_endtime: () =>  friday_endtime || null,
        getsathurday_starttime: () =>  sathurday_starttime || null,
        getsathurday_endtime: () =>  sathurday_endtime || null,
        getsunday_starttime: () =>  sunday_starttime || null,
        getsunday_endtime: () =>  sunday_endtime || null,
        getemail: () =>  email || null,
        getsap_cost_code: () =>  sap_cost_code || null,
        getdescription_th: () =>  description_th || null,
        getdescription_en: () =>  description_en || null,
        getimg: () =>  img || null,
        getstatus: () =>  status || null    
        })
    }
}

