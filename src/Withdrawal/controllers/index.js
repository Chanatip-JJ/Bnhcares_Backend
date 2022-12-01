const {
        listWithdrawal,
        addWithdrawal,
        editWithdrawal
      } = require('../use-cases');
      

const makeGetWithdrawal = require('./get-withdrawal')
const makeAddWithdrawal = require('./post-withdrawal')
const makeEditWithdrawal = require('./patch-withdrawal')



const getWithdrawal = makeGetWithdrawal({listWithdrawal});
const postWithdrawal = makeAddWithdrawal({addWithdrawal})
const patchWithdrawal = makeEditWithdrawal({editWithdrawal})

module.exports = {
  getWithdrawal,
  postWithdrawal,
  patchWithdrawal
};

