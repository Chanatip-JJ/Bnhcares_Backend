const {listCategory,
      listCategoryID,
      removeCategory,
      addCategory,
      editCategory,
      listPackageInCategory
      } = require('../use-cases');
      
const makeGetCategory = require('./get-category');
const makeGetCategoryID = require('./get-categoryId')
const makeRemoveCategory = require('./delete-category')
const makeAddCategory =require('./post-category')
const makeEditCategory = require('./patch-category')
const makeGetPackageInCategory = require('./get-package-in-category')

const getCategory = makeGetCategory({listCategory});
const getCategoryID = makeGetCategoryID({listCategoryID});
const getPackageInCategory = makeGetPackageInCategory({listPackageInCategory});
const deleteCategory = makeRemoveCategory({removeCategory})
const postCategory = makeAddCategory({addCategory})
const patchCategory = makeEditCategory({editCategory})




module.exports = {
  getCategory,
  getCategoryID,
  deleteCategory,
  postCategory,
  patchCategory,
  getPackageInCategory
};

