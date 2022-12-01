/**
 * @swagger
 * components:
 *   schemas:
 *     DatePicker:
 *       type: object
 *       properties:
 *          month:
 *            type: integer
 *            example: "12"
 *          year:
 *            type: integer
 *            example: "2022"   
 *          careproviderId:
 *            type: integer
 *          locationId:
 *            type: integer
 */
module.exports = function buildDatePicker({}) {
        return function makeGetDate({
             month,
             year,
             careproviderId,
             locationId
    } = {}) {
        var StartDate = getFirstDateOFMonth(month,year)
        var EndDate = getLastDateOFMonth(month,year)
        return Object.freeze({
            getStart_Date: () =>  StartDate,
            getEnd_Date: () =>  EndDate,
            getCareproviderId: () => careproviderId ,
            getLocationId: () =>  locationId,
        })
    }
}


function getFirstDateOFMonth(month,year){
    const FIRST_DAY = 2 //* 2 is  first date of  month
    const JS_Month = month - 1
    const firstDateOfTheMonth = new Date(year,JS_Month,FIRST_DAY)
    return firstDateOfTheMonth
}

function getLastDateOFMonth(month,year){
    const lastDateOfTheMonth = new Date(year, month, 1)
    return lastDateOfTheMonth
}


