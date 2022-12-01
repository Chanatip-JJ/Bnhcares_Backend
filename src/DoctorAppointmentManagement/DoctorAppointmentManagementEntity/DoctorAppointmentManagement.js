//* swagger documentation --> Package  as below
/**
 * @swagger
 * components:
 *   schemas:
 *     DoctorAppointmentManagement:
 *       type: object
 *       properties:
 *          uid:
 *            type: integer      
 *          careprovider_uid:
 *            type: integer
 *          location_uid:
 *            type: integer
 *          showCareprovider:
 *            type: boolean
 *          showSchedule:
 *            type: boolean
 *          current_day_start_trim:
 *            type: integer 
 *          start_time_trim:
 *            type: integer  
 *          end_time_trim:
 *            type: integer
 *          allowAppoint:
 *            type: boolean
 *          isConfirm:
 *            type: boolean
 *          isReschedule:
 *            type: boolean
 *          isCancel:
 *            type: boolean
 *          isTeleConsultation:
 *            type: boolean
 *            default: false
 *          telephone:
 *            type: string
 *          service_description_en:
 *            type: string
 *          service_description_th:
 *            type: string
 *          sunday:
 *            type: boolean
 *            default: false
 *          monday:
 *            type: boolean
 *            default: false
 *          tuesday:
 *            type: boolean
 *            default: false  
 *          wednesday:
 *            type: boolean
 *            default: false  
 *          thursday:
 *            type: boolean
 *            default: false  
 *          friday:
 *            type: boolean
 *            default: false  
 *          saturday:
 *            type: boolean
 *            default: false               
 *          status:
 *            type: string
 */
 module.exports = function buildDoctorAppointmentManagement({}) {
    return function makeDoctorAppointmentManagement({
        uid,
        careprovider_uid,
        location_uid,
        showCareprovider,
        showSchedule,
        current_day_start_trim,
        start_time_trim,
        end_time_trim,
        allowAppoint,
        isConfirm,
        isReschedule,
        isCancel,
        isTeleConsultation,
        telephone,
        service_description_en,
        service_description_th,
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        status,
} = {}) {
    
        return Object.freeze({
            getUID : () => uid || null,
            getCareprovider_uid : () => careprovider_uid || null,
            getLocation_uid : () => location_uid || null,
            getShowCareprovider:() => showCareprovider || true,
            getShowSchedule:() => showSchedule || true,
            getCurrent_day_start_trim : () => current_day_start_trim || 0,
            getStart_time_trim : () => start_time_trim || 0,
            getEnd_time_trim : () => end_time_trim || 0,
            getAllowAppoint : () => allowAppoint || true,
            getIsConfirm : () => isConfirm || true,
            getIsReschedule : () => isReschedule || true,
            getIsCancel : () => isCancel || true,
            getIsTeleConsultation : () => isTeleConsultation || null,
            getTelephone:() => telephone || null,
            getService_description_en :() => service_description_en || null,
            getService_description_th :() => service_description_th || null,
            getSunday:()=> sunday || false,
            getMonday:()=> monday || false,
            getTuesday:()=> tuesday || false,
            getWednesday:()=> wednesday || false,
            getThursday:()=> thursday || false,
            getFriday:()=> friday || false,
            getSaturday:()=> saturday || false,
            getStatus : () => status || null
        })
    }   
}

