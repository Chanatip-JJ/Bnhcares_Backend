module.exports = function makeListPackage({CartAccessDB,makeGetCart}){
    return async function listPackages({params} = {}){
        if(!params){
            throw new Error('You must supply id.')
        }
        const CartEntity = makeGetCart({
          user_id: params.user_id,
        })
        const Cart = await CartAccessDB.findAll({CartEntity})
        return Cart  
    }              
}