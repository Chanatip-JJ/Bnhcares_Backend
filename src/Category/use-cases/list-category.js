module.exports = function makeListCategory({CategoryAccessDB,makeGetCategory}){
    return async function listCategory({query} = {}){
        const CategoryEntity = makeGetCategory(query)
        const package =  await CategoryAccessDB.findAll({CategoryEntity})
        return package         
    }
}