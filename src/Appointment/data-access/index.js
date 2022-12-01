const {date_config} = require('../../helpers/Mssql/Date_config')
const {slot_config} = require('../../helpers/Mssql/Slot_config')
const Mssql  = require('../../helpers/Mssql')
const buildDatePicker = require('./datepicker-sql')
const buildTimeSlot = require('./timeslot-sql')
const buildBooking = require('./booking-sql')
const buildGetBooking = require('./get-booking-sql')
const buildSessionBooking = require('./session-booking-sql')
const buildEditBooking = require('./edit-booking-sql')
const buildLogsBooking = require('./logs-booking-sql')
const buildGetBookingID = require('./get-booking-id-sql')
const buildGetNewBookingID = require('./get-new-booking-sql')

const sql = require('mssql/msnodesqlv8')



const DatePickerAccessDB = buildDatePicker({date_config,sql})
const TimeSlotAccessDB = buildTimeSlot({slot_config,sql})
const BookingAccessDB = buildBooking({slot_config,sql})
const BookingSessionAccessDB = buildSessionBooking({date_config,sql})
const GetBookingAccessDB = buildGetBooking({date_config,sql})
const EditBookingAccessDB = buildEditBooking({slot_config,sql})
const BookingLogAccessDB = buildLogsBooking({Mssql,sql})
const BookingIDAccessDB = buildGetBookingID({date_config,sql})
const NewBookingAccessDB = buildGetNewBookingID({date_config,sql})



module.exports = {DatePickerAccessDB,
                  TimeSlotAccessDB,
                  BookingAccessDB,
                  BookingSessionAccessDB,
                  GetBookingAccessDB,
                  EditBookingAccessDB,
                  BookingLogAccessDB,
                  BookingIDAccessDB,
                  NewBookingAccessDB
                }



