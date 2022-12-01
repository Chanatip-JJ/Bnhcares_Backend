module.exports = function buildGetBanner({}) {
        return function makeGetBanner({
        uid ,
        type,
        priority_code ,
        bnh_link_th ,
        bnh_link_en,
        image_th,
        image_en ,
        status 
    } = {}) {
        
        return Object.freeze({
            getUid : () => uid || null,
            getType : () => type|| null,
            getPriority_code : () => priority_code || null,
            getBnh_link_th : () => bnh_link_th || null,
            getBnh_link_en :() => bnh_link_en|| null,
            getImage_th :() => image_th|| null,
            getImage_en :() => image_en || null,
            getStatus :() => status || null
        })
    }
}

