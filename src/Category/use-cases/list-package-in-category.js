module.exports = function makeListPackageInCategory({CategoryAccessDB,makeGetCategory}){
    return async function listPackageInCategory({query} = {}){        
      const CategoryEntity = makeGetCategory(query)
      const package =  await CategoryAccessDB.findPackageInCategory({CategoryEntity})
      return package 
      }     
    }