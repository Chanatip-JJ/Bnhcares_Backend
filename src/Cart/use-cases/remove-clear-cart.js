module.exports = function makeRemoveCart({CartAccessDB,makeGetCart}){
    return async function removeCart({params} = {}){
        if(!params){
            throw new Error('You must supply a user id.')
        }
        
        var CartEntity = makeGetCart({ 
            user_id: params.user_id 
        })
        
        await CartAccessDB.removeAll({ CartEntity })

        return {
            isSuccess: true,
            message:'The Cart successfully deleted'
        }
    }
       

}