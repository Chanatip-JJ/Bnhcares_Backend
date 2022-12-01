module.exports = function makeListDepartment({DepartmentAccessDB,makeGetDepartment}){
    return async function listDepartments({query} = {}){
        const DepartmentEntity = makeGetDepartment(query)
        const Department =  await DepartmentAccessDB.findAll({DepartmentEntity})
        return Department         
    }
}