const CategoryAccessDB = require('../data-access')

const makeListCategoryID = require('./list-category-id')
const makeListCategory = require('./list-category')
const makePackageInCategory = require('./list-package-in-category')
const makeRemoveCategory = require('./remove-category') 
const makeAddCategory = require('./add-category')
const makeEditCategory = require('./edit-category')



const {
    makeCategory,
    makeGetCategory
} = require('../CategoryEntity')

const listCategory = makeListCategory({CategoryAccessDB,makeGetCategory})
const listCategoryID = makeListCategoryID({CategoryAccessDB,makeGetCategory})
const removeCategory = makeRemoveCategory({CategoryAccessDB,makeGetCategory})
const addCategory = makeAddCategory({CategoryAccessDB,makeCategory})
const editCategory = makeEditCategory({CategoryAccessDB,makeCategory,makeGetCategory})
const listPackageInCategory = makePackageInCategory({CategoryAccessDB,makeGetCategory})



module.exports = {
    listCategory,
    listCategoryID,
    removeCategory,
    addCategory,
    editCategory,
    listPackageInCategory
}

