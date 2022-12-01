const {
        listNotification,
        addNotification,
        editNotification
      } = require('../use-cases');
      

const makeGetNotification = require('./get-Notification')
const makeAddNotification = require('./post-Notification')
const makeEditNotification = require('./patch-Notification')



const getNotification = makeGetNotification({listNotification});
const postNotification = makeAddNotification({addNotification})
const patchNotification = makeEditNotification({editNotification})

module.exports = {
  getNotification,
  postNotification,
  patchNotification
};

