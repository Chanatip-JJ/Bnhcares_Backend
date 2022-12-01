module.exports = function makeListDepartmentID({DepartmentAccessDB,makeGetDepartment}){
    return async function listDepartmentId({params} = {}){        
        if(!params){
            throw new Error('You must supply a location id.')
        }
        const DepartmentEntity = makeGetDepartment({
          //! change id column
          uid : params.department_id
        })
        const Department = await DepartmentAccessDB.findById({DepartmentEntity})
        return Department  
      }     
    }