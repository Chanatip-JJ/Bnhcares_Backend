module.exports = function makeEditPerson({PersonAccessDB,makePerson,makeGetPerson}){
    return async function editPerson({edit,params} ={}){
        
        // set Person Params before passing through Mssql  
        var PersonEntity = makeGetPerson({
            PERSON_NO : params.person_id
          })
        // check existing person before update
        const existing = await PersonAccessDB.findById({
            PersonEntity
        })

        // check existing product
        if(!existing){
            throw new RangeError('Person not found.')
        }
    
        // set Person Params before passing through Mssql 
        var PersonEntity  = makePerson({...existing,...edit})
        await PersonAccessDB.update({PersonEntity})
        

        return  {
            message:'THe Person has successfully been edited'
        }        
    }
}