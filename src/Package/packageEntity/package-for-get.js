module.exports = function buildGetPackage({}) {
        return function makeGetPackage({
        uid ,
        product_priority ,
        name_th ,
        name_en ,
        description ,
        package_saleprice ,
        package_regprice ,
        package_sale_start = 0,
        package_sale_end ,
        package_preservice_th ,
        package_postservice_th ,
        package_preservice_en ,
        package_postservice_en ,
        image,
        status = 'active',
        active_from ,
        active_to ,
    } = {}) {
        
        return Object.freeze({
            getUid : () => uid || null,
            getProduct_priority : () => product_priority|| null,
            getNameTH : () => name_th || null,
            getNameEN : () => name_en || null,
            getDescription :() => description || null,
            getSalePrice :() => +package_saleprice || null,
            getRegPrice :() => +package_regprice || null,
            getSaleStart :() => package_sale_start || null,
            getSaleEnd :() => package_sale_end || null,
            getPreServiceTH :() => package_preservice_th || null,
            getPostServiceTH :() => package_postservice_th || null,
            getPreServiceEN :() => package_preservice_en || null,
            getPostServiceEN :() => package_postservice_en || null,
            getImage : () => image || null,
            getStatus :() => status || null,
            getActiveFrom :() => active_from || null,
            getActiveTO :() => active_to || null,
        })
    }
}

