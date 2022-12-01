module.exports = function  makeAddWithdrawal({WithdrawalAccessDB,makeWithdrawal}){
    return async function addWithdrawal({detail}){
        const WithdrawalEntity = makeWithdrawal(detail)
        
        await WithdrawalAccessDB.insert({WithdrawalEntity})
        
        return {
            message:'The Withdrawal has successfully been added'
        }  
    }
}