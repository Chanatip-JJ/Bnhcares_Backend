module.exports = function makeAddPackage({CartAccessDB,makeCart}){
    return async function addPackage({cartDetail}){
        const CartEntity = makeCart(cartDetail)
        
        await CartAccessDB.insert({CartEntity})
        return {
            message:'THe Package has successfully been added in Cart'
        }  
    }
}