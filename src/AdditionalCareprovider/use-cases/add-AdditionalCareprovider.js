module.exports = function  makeAddAdditionalCareprovider({AdditionalCareproviderAccessDB,makeAdditionalCareprovider}){
    return async function addAdditionalCareprovider({detail}){
        const AdditionalCareproviderEntity = makeAdditionalCareprovider(detail)
        
        await AdditionalCareproviderAccessDB.insert({AdditionalCareproviderEntity})
        
        return {
            message:'The AdditionalCareprovider has successfully been added'
        }  
    }
}