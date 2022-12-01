module.exports = function makeEditWithdrawal({WithdrawalAccessDB,makeWithdrawal,makeGetWithdrawal}){
    return async function editWithdrawal({edit,params} ={}){

        //* set Params before passing through Mssql  
        var WithdrawalEntity = makeGetWithdrawal({
            uid: params.uid
          })
        //* check existing data before update
        const existing = await WithdrawalAccessDB.findByID({
            WithdrawalEntity
        })
        console.log(existing)
        //* check existing 
        if(!existing){
            throw new RangeError('Withdrawal not found.')
        }
        
        
        //* set Params before passing through Mssql
        var WithdrawalEntity  = makeWithdrawal({...existing[0],...edit})
        await WithdrawalAccessDB.update({WithdrawalEntity})
        
        return  {
            message:'The Withdrawal has successfully been edited'
        }        
    }
}