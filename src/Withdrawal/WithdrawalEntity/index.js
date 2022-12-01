const buildWithdrawal = require('./Withdrawal')
const buildGetWithdrawal = require('./Withdrawal-for-get')



const makeWithdrawal = buildWithdrawal ({})
const makeGetWithdrawal = buildGetWithdrawal({})


module.exports = {
    makeWithdrawal,
    makeGetWithdrawal
}

