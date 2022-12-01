const NotificationAccessDB = require('../data-access')

const makeListNotification = require('./list-Notification')
const makeAddNotification = require('./add-Notification')
const makeEditNotification = require('./edit-Notification')

const {
    makeNotification,
    makeGetNotification
} = require('../NotificationEntity')


const listNotification = makeListNotification({NotificationAccessDB,makeGetNotification})
const addNotification = makeAddNotification({NotificationAccessDB,makeNotification})
const editNotification = makeEditNotification({NotificationAccessDB,makeNotification,makeGetNotification})

module.exports = {
    listNotification,
    addNotification ,
    editNotification
}
