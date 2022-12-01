
module.exports = function makeRemoveCart({CartAccessDB,makeGetCart}){
    return async function removeCart({toDelete} = {}){
        if(!toDelete){
            throw new Error('You must supply a user id and package id.')
        } 
        var CartEntity = makeGetCart(toDelete)

        const CartToDelete = await CartAccessDB.findById({CartEntity})
        
        if(!CartToDelete || CartToDelete === undefined) {
            return {
                isSuccess: false,
                message:'Package in cart not found, nothing to delete'
            }
        }

        // set status as inactive
        var CartEntity = makeGetCart(toDelete)

        // change status
        await CartAccessDB.remove({ CartEntity })

        return {
            isSuccess: true,
            message:'The Cart successfully deleted'
        }
    }
        

}