const WithdrawalAccessDB = require('../data-access')

const makeListWithdrawal = require('./list-withdrawal')
const makeAddWithdrawal = require('./add-withdrawal')
const makeEditWithdrawal = require('./edit-withdrawal')

const {
    makeWithdrawal,
    makeGetWithdrawal
} = require('../WithdrawalEntity')


const listWithdrawal = makeListWithdrawal({WithdrawalAccessDB,makeGetWithdrawal})
const addWithdrawal = makeAddWithdrawal({WithdrawalAccessDB,makeWithdrawal})
const editWithdrawal = makeEditWithdrawal({WithdrawalAccessDB,makeWithdrawal,makeGetWithdrawal})

module.exports = {
    listWithdrawal,
    addWithdrawal ,
    editWithdrawal
}
