module.exports = function makeEditCategory({CategoryAccessDB,makeCategory,makeGetCategory}){
    return async function editCategory({edit,params} ={}){
        
        // set Category Params before passing through Mssql  
        var CategoryEntity = makeGetCategory({
            uid: params.category_id
          })
        // check existing package before update
        const existing = await CategoryAccessDB.findById({
            CategoryEntity
        })

        // check existing product
        if(!existing){
            throw new RangeError('Category not found.')
        }
      
        // set Category Params before passing through Mssql 
        var CategoryEntity  = makeCategory({...existing,...edit})
        await CategoryAccessDB.update({CategoryEntity})
        
        return  {
            message:'THe Category has successfully been edited'
        }        
    }
}