module.exports = function makeAddCategory({CategoryAccessDB,makeCategory}){
    return async function addCategory({CategoryDetail}){
        const CategoryEntity = makeCategory(CategoryDetail)
        await CategoryAccessDB.insert({CategoryEntity})
        return {
            message:'THe Category has successfully been added'
        }  
    }
}