const {DateTime , FixedOffsetZone} = require('luxon')
const buildDatePicker = require('./DatePicker')
const buildTimeSlot = require('./TimeSlot')
const buildBooking = require('./Booking')
const buildGetBooking = require('./GetBooking')
const buildEditBooking = require('./EditBooking')
const buildLogBooking = require('./LogBooking')

const makeGetDate = buildDatePicker({})
const makeGetTimeSlot = buildTimeSlot({})
const makeBooking = buildBooking({DateTime,FixedOffsetZone})
const makeGetBooking = buildGetBooking({})
const makeEditBooking = buildEditBooking({DateTime,FixedOffsetZone})
const makeLogBooking = buildLogBooking()



module.exports = {
    makeGetDate,
    makeGetTimeSlot,
    makeBooking,
    makeEditBooking,
    makeGetBooking,
    makeLogBooking
}

