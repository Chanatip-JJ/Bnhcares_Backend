module.exports = function makeListCategoryID({CategoryAccessDB,makeGetCategory}){
    return async function listCategoryId({params} = {}){        
        if(!params){
            throw new Error('You must supply a category id.')
        }
        
        const CategoryEntity = makeGetCategory({
          uid: params.category_id
        })
        const Category = await CategoryAccessDB.findById({CategoryEntity})
        return Category  
      }     
    }