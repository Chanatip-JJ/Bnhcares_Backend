// validate input request.
module.exports = function buildPackage({validator,DateTime,FixedOffsetZone}) {
        return function makePackage({
        uid ,
        product_priority,
        name_th ,
        name_en ,
        description ,
        package_saleprice ,
        package_regprice ,
        package_sale_start ,
        package_sale_end ,
        package_preservice_th ,
        package_postservice_th ,
        package_preservice_en ,
        package_postservice_en ,
        //package_img ,
        status = 'active',
        active_from,
        active_to,
    } = {}) {

        if(!name_th){
            throw new Error('Package must have an name in Thai.')
        }
        if(!name_en){
            throw new Error('Package must have an name in English.')
        }

        if(!validator.isAlphanumeric(name_en)){
            throw new Error('Package name contains some non-English characters.')
        }

        if(!description){
            throw new Error('Package must have a description.')
        }

        if(package_saleprice && !validator.isInt(package_saleprice)){
            throw new Error('Sale Price must be number')
        }
        
        if(package_sale_start && !validator.isDate(package_sale_start)){
            throw new Error('The date of started sale must be number')
        }

        if(package_sale_end && !validator.isDate(package_sale_end)){
            throw new Error('he date of ended sale must be number')
        }
      
        if(!package_regprice){
            throw new Error('Package price is null.')
        }

        if(!validator.isInt(package_regprice)){
            throw new Error('invalid price')
        }

        if(!package_preservice_th){
            throw new Error('Package must have regular price.')    
        }

        if(!package_postservice_th){
            throw new Error('Package must have regular price.')
        }

        if(!package_preservice_en){
            throw new Error('Package must have regular price.')
        }

        if(!package_postservice_en){
            throw new Error('Package must have regular price.')
        }

        if(!active_from){
            throw new Error('Package must have regular price.')
        }

        // YYYY/MM/DD
        if(validator.isDate(active_from)){
            throw new Error('Start date is invalid.')
        }

        if(!active_to){
            throw new Error('Package must have regular price.')
        }

        // YYYY/MM/DD
        if(validator.isDate(active_to)){
            throw new Error('End date is invalid.')
        }
        
        // set local timezone
        var localActive_from = setGMT(active_from)

        var localActive_to = setGMT(active_to)
        
        function setGMT(datetime){
            const newDate = new Date(datetime) 
            const luxonDateTime = DateTime.fromJSDate(newDate)
            const adapted = luxonDateTime.setZone(FixedOffsetZone.parseSpecifier("GMT+7")).plus({ hours: +7 })
            return adapted.toJSDate()
        }

        return Object.freeze({
            getUid : () => uid || null,
            getProduct_priority : () => product_priority|| null,
            getNameTH : () => name_th || null,
            getNameEN : () => name_en || null,
            getDescription :() => description|| null,
            getSalePrice :() =>  +package_saleprice || null,
            getRegPrice :() => +package_regprice || null,
            getSaleStart :() => package_sale_start  || null,
            getSaleEnd :() => package_sale_end  || null,
            getPreServiceTH :() => package_preservice_th || null,
            getPostServiceTH :() => package_postservice_th || null,
            getPreServiceEN :() => package_preservice_en || null,
            getPostServiceEN :() => package_postservice_en || null,
            //getPictureImg :() => package_img || null,
            getStatus :() => status|| null,
            getActiveFrom :() => localActive_from || null,
            getActiveTO :() => localActive_to || null,
        })
    }
}

