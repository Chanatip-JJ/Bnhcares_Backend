const {DateTime , FixedOffsetZone} = require('luxon')

const {DatePickerAccessDB,
       TimeSlotAccessDB,
       BookingAccessDB,
       BookingSessionAccessDB,
       GetBookingAccessDB,
       EditBookingAccessDB,
       BookingLogAccessDB,
       BookingIDAccessDB ,
       NewBookingAccessDB
      } = require('../data-access')

const makeListDate = require('./list-date')
const makeListTimeSlot = require('./list-timeslot')
const makeAddBooking = require('./add-booking')
const makeListBookingSession = require('./list-booking-session')
const makeListBooking = require('./list-booking')
const makeUpdateBooking =require('./update-booking')
const makeListBookingID = require('./list-booking-id')


const {makeGetDate,makeGetTimeSlot,makeBooking,makeGetBooking,makeEditBooking,makeLogBooking} = require('../AppointmentEntity')
const {OrderDetailAccessDB} = require('../../Order/data-access')
const DoctorAppointmentManagementAccessDB = require('../../DoctorAppointmentManagement/data-access')
const {makeGetOrderDetail,makeOrderDetail} = require('../../Order/OrderEntity')
const {makeGetDoctorAppointmentManagement} = require('../../DoctorAppointmentManagement/DoctorAppointmentManagementEntity')
const WithdrawalAccessDB = require('../../Withdrawal/data-access')
const { makeGetWithdrawal }= require('../../Withdrawal/WithdrawalEntity')


const listDate = makeListDate({makeGetDate,DatePickerAccessDB,DoctorAppointmentManagementAccessDB,makeGetDoctorAppointmentManagement})
const listTimeSlot = makeListTimeSlot({makeGetTimeSlot,TimeSlotAccessDB,DoctorAppointmentManagementAccessDB,makeGetDoctorAppointmentManagement,WithdrawalAccessDB,makeGetWithdrawal})
const addBooking = makeAddBooking({makeBooking,BookingAccessDB,OrderDetailAccessDB,makeGetOrderDetail,makeLogBooking,BookingLogAccessDB,makeOrderDetail,DateTime,FixedOffsetZone})
const listSession = makeListBookingSession({BookingSessionAccessDB})
const listBooking = makeListBooking({makeGetBooking,GetBookingAccessDB})
const updateBooking = makeUpdateBooking({makeEditBooking,EditBookingAccessDB,BookingLogAccessDB,makeLogBooking,OrderDetailAccessDB,makeGetOrderDetail,makeOrderDetail,NewBookingAccessDB,DoctorAppointmentManagementAccessDB})
const listBookingID = makeListBookingID({BookingIDAccessDB})

module.exports = {
    listDate,
    listTimeSlot,
    addBooking,
    listSession,
    listBooking,
    updateBooking,
    listBookingID
}

