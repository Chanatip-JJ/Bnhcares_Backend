const validator = require('validator')
const buildNotification = require('./Notification')
const buildGetNotification = require('./Notification-for-get')
const {DateTime,FixedOffsetZone} = require('luxon')


const makeNotification = buildNotification({validator,DateTime,FixedOffsetZone})
const makeGetNotification = buildGetNotification({})



module.exports = {
    makeNotification,
    makeGetNotification
}

