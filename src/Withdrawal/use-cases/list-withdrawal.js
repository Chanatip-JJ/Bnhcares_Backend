module.exports = function makeListWithdrawal({WithdrawalAccessDB,makeGetWithdrawal}){
    return async function listWithdrawal({params} = {}){        
        if(!params){
            throw new Error('You must supply a  id.')
        }
        
        const WithdrawalEntity = makeGetWithdrawal(params)
        
        const Withdrawal = await WithdrawalAccessDB.findByCareproviderAndLocationID({WithdrawalEntity})
        

        return Withdrawal
      }     
    }