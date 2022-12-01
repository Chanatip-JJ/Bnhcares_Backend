module.exports = function makeRemoveCategory({CategoryAccessDB,makeGetCategory}){
    return async function removeCategory({params} = {}){
        if(!params){
            throw new Error('You must supply a package id.')
        }
        
        var CategoryEntity = makeGetCategory({ 
            uid: params.category_id 
        })

        const CategoryToDelete = await CategoryAccessDB.findById({CategoryEntity})
        
        if(!CategoryToDelete || CategoryToDelete === undefined) {
            return {
                isSuccess: false,
                message:'Category not found, nothing to delete'
            }
        }

        if(alreadyDeleted(CategoryToDelete)){
            return {
                isSuccess: false,
                message:'This package already was deleted'
            }
        }

        // set status as inactive
        var CategoryEntity = makeGetCategory({ 
            uid: params.category_id,
            status:'inactive' 
        })

        // change status
        await CategoryAccessDB.remove({ CategoryEntity })

        return {
            isSuccess: true,
            message:'The package successfully deleted'
        }
    }
        //whether requested package was already deleted . 
        function alreadyDeleted(CategoryToDelete){
            if(CategoryToDelete.status == 'inactive'){
                return true;
            }
            return false;
        }


}