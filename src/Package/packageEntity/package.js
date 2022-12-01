//* swagger documentation --> Package  as below
/**
 * @swagger
 * components:
 *   schemas:
 *     Package:
 *       type: object
 *       properties:
 *          uid:
 *            type: integer
 *          product_priority:
 *            type: integer  
 *          name_th:
 *            type: string   
 *          name_en:
 *            type: string
 *          description_th:
 *            type: string 
 *          description_en:
 *            type: string 
 *          package_saleprice:
 *            type: integer   
 *          package_regprice:
 *            type: integer   
 *          package_sale_start:
 *            type: string
 *            format: date-time   
 *          package_sale_end:
 *            type: string
 *            format: date-time   
 *          package_preservice_th:
 *            type: string   
 *          package_postservice_th:
 *            type: string   
 *          package_preservice_en:
 *            type: string   
 *          package_postservice_en:
 *            type: string
 *          alert_message_th:
 *            type: string
 *          alert_message_en:
 *            type: string
 *          department_contact:
 *            type: string
 *          book_deadline:
 *             type: date-time
 *          early_book:
 *             type: integer   
 *          image:
 *            type: string
 *          category:
 *            type: string     
 *          status:
 *            type: string   
 *          active_from:
 *            type: string
 *            format: date-time
 *            example: "2022-09-30"
 *            pattern: "YYYY-MM-DD"        
 *          active_to:
 *            type: string
 *            format: date-time
 *            example: "2022-09-30"
 *            pattern: "YYYY-MM-DD"      
 */

module.exports = function buildPackage({DateTime,FixedOffsetZone}) {
        return function makePackage({
        uid ,
        package_priority,
        name_th ,
        name_en ,
        description_th,
        description_en,
        package_saleprice ,
        package_regprice ,
        package_sale_start ,
        package_sale_end ,
        package_preservice_th ,
        package_postservice_th ,
        package_preservice_en ,
        package_postservice_en ,
        alert_message_th,
        alert_message_en,
        department_contact_th,
        department_contact_en,
        book_deadline,
        early_book,
        image ,
        category,
        second_category,
        status = 'active',
        active_from,
        active_to,
    }= {}) {

        // if(!name_th){
        //     throw new Error('Package must have an name in Thai.')
        // }
        // if(!name_en){
        //     throw new Error('Package must have an name in English.')
        // }

        // if(!description){
        //     throw new Error('Package must have a description.')
        // }

        // if(package_saleprice && !validator.isInt(package_saleprice)){
        //     throw new Error('Sale Price must be number')
        // }
        
        // if(package_sale_start && !validator.isDate(package_sale_start)){
        //     throw new Error('The date of started sale must be number')
        // }

        // if(package_sale_end && !validator.isDate(package_sale_end)){
        //     throw new Error('he date of ended sale must be number')
        // }
      
        // if(!package_regprice){
        //     throw new Error('Package price is null.')
        // }

        // if(!validator.isInt(package_regprice)){
        //     throw new Error('invalid price')
        // }

        // if(!package_preservice_th){
        //     throw new Error('Package must have pre-service description.')    
        // }

        // if(!package_postservice_th){
        //     throw new Error('Package must have post-service description.')
        // }

        // if(!package_preservice_en){
        //     throw new Error('Package must have pre-service description.')
        // }

        // if(!package_postservice_en){
        //     throw new Error('Package must have post-service description.')
        // }

        // if(!active_from){
        //     throw new Error('Package must have regular price.')
        // }

       
        // if(validator.isDate(active_from)){
        //     throw new Error('Start date is invalid.')
        // }

        // if(!active_to){
        //     throw new Error('Package must have regular price.')
        // }

      
        // if(validator.isDate(active_to)){
        //     throw new Error('End date is invalid.')
        // }
        
        const adaptedActiveFrom =  adaptDate(active_from)
        const adaptedActiveTo =  adaptDateAndTime(active_to)
        const adaptedBookDeadline = adaptDateAndTime(book_deadline)
        return Object.freeze({
            getUid : () => uid || null,
            getProduct_priority : () => package_priority|| null,
            getNameTH : () => name_th || null,
            getNameEN : () => name_en || null,
            getDescription_th :() => description_th|| null,
            getDescription_en :() => description_en|| null,
            getSalePrice :() =>  +package_saleprice || null,
            getRegPrice :() => +package_regprice || null,
            getSaleStart :() => package_sale_start  || null,
            getSaleEnd :() => package_sale_end  || null,
            getPreServiceTH :() => package_preservice_th || null,
            getPostServiceTH :() => package_postservice_th || null,
            getPreServiceEN :() => package_preservice_en || null,
            getPostServiceEN :() => package_postservice_en || null,
            getAlert_message_th :() => alert_message_th || null,
            getAlert_message_en :() => alert_message_en || null,
            getDepartmentContact_th: () => department_contact_th || null,
            getDepartmentContact_en:() => department_contact_en || null,
            getEarly_book :() => early_book || null,
            getBook_deadline :() => adaptedBookDeadline || null,
            getImage :() => image || null,
            getCategory:() => category || null,
            getSecondCategory:() => second_category || null,
            getStatus :() => status|| null,
            getActiveFrom :() => adaptedActiveFrom || null,
            getActiveTO :() => adaptedActiveTo || null,
        })
    }
    function adaptDate(Date){
        if(!Date){
            return null
        }
        const luxon_date = DateTime.fromISO(Date).setZone(FixedOffsetZone.parseSpecifier("GMT+7")).startOf("day")
        const JS_Date = luxon_date.plus({ hours: 7 }).toJSDate()
        return JS_Date
    }
    
    function adaptDateAndTime(Day){
        
        const LAST_HOUR_OF_DAY = '23:59:59'
        const luxon_date_time = DateTime.fromFormat(`${Day} ${LAST_HOUR_OF_DAY}`, "yyyy-MM-dd HH:mm:ss").setZone(FixedOffsetZone.parseSpecifier("GMT+7")).startOf("second");
        const JS_Date = luxon_date_time.plus({ hours: 7 }).toJSDate();
        return JS_Date
    }
}

