module.exports = function makeEditCart({CartAccessDB,makeCart,makeGetCart}){
    return async function editCart({edit} = {}){
        
        // set Cart Params before passing through Mssql  
        var CartEntity = makeGetCart(edit)

        // check existing Cart before update
        const existing = await CartAccessDB.findById({
            CartEntity
        })
        
        // check existing product
        if(!existing){
            throw new RangeError('Package in your cart not found.')
        }

        // set Cart Params before passing through Mssql 
        var CartEntity  = makeCart({...existing,...edit})

        await CartAccessDB.update({CartEntity})
        
        return  {
            message:'The Cart has successfully been edited'
        }        
    }
}