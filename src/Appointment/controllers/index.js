const { listDate,listTimeSlot,addBooking,listSession,listBooking,updateBooking,listBookingID} = require('../use-cases');
const makeGetDate = require('./post-date');
const makeGetTimeSlot = require('./post-timeslot')
const makePostBooking = require('./post-booking')
const makeGetSession = require('./get-session')
const makeGetBooking = require('./get-booking')
const makePatchBooking = require('./patch-booking')
const makeGetBookingID = require('./get-booking-id')

const getAvailableDate = makeGetDate({listDate});
const getAvailableSlot = makeGetTimeSlot({listTimeSlot}) 
const postBooking = makePostBooking({addBooking})
const getSession = makeGetSession({listSession})
const getBooking = makeGetBooking({listBooking})
const patchBooking = makePatchBooking({updateBooking})
const getBookingID = makeGetBookingID({listBookingID})

module.exports = {
  getAvailableDate,
  getAvailableSlot,
  postBooking,
  getSession,
  getBooking,
  patchBooking,
  getBookingID
};

