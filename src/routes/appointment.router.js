const express = require("express");

const makeCallback = require("../helpers/express-callbacks");
const checkAppointmentAccess = require('../middleware/checkAppointmentAccess')
const appointmentRouter = express.Router({ mergeParams: true });
const {  getAvailableDate,
         getAvailableSlot,
         postBooking,
         getSession,
         getBooking,
         patchBooking,
         getBookingID      
      } = require("../Appointment/controllers");


//* swagger tags
/**
   * @openapi
   *  tags: 
   *    name: Appointment
   *    description: The Appointment managing API   
   */
//* swagger get method


/**
   * @openapi
   * paths:
   *  '/appointment/booking/get/{booking_uid}':
   *   get:
   *     tags: [Appointment]
   *     summary: Return booking details.
   *     parameters:
   *     - in: path
   *       name: booking_uid
   *       description: Numeric ID of the booking to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: booking not found
   */
 appointmentRouter.get('/booking/get/:booking_uid',makeCallback(getBookingID))

/**
   * @openapi
   * paths:
   *  '/appointment/booking/add':
   *   post:
   *     tags: [Appointment]
   *     summary: add Booking and return BookingID.
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *              $ref: '#/components/schemas/Booking'
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Booking not Success
   */
 appointmentRouter.post('/booking/add',makeCallback(postBooking));

/**
   * @openapi
   * paths:
   *  '/appointment/booking/get':
   *   post:
   *     tags: [Appointment]
   *     summary: Return a booking detail according to BookingID and PatientID.
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *              $ref: '#/components/schemas/GetBooking' 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Booking not found
   */
 appointmentRouter.post('/booking/get',makeCallback(getBooking))

/**
   * @openapi
   * paths:
   *  '/appointment/booking/edit':
   *   patch:
   *     tags: [Appointment]
   *     summary: edit Booking 
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *              $ref: '#/components/schemas/EditBooking' 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Edit not success
   */
 appointmentRouter.patch('/booking/edit',makeCallback(patchBooking))


/**
   * @openapi
   * paths:
   *  '/appointment/date':
   *   post:
   *     tags: [Appointment]
   *     summary: Return the Available date.
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/DatePicker' 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Not found
   */
appointmentRouter.post('/date',makeCallback(getAvailableDate));


/**
   * @openapi
   * paths:
   *  '/appointment/timeslot':
   *   post:
   *     tags: [Appointment]
   *     summary: Return the Available slot.
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/TimeSlot' 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Not found
   */
appointmentRouter.post('/timeslot',makeCallback(getAvailableSlot));


/**
   * @openapi
   * paths:
   *  '/appointment/session/{session_id}':
   *   get:
   *     tags: [Appointment]
   *     summary: Return session details.
   *     parameters:
   *     - in: path
   *       name: session_id
   *       description: Numeric ID of the session to get
   *       required: true
   *       type: Number 
   *     responses:
   *       200:
   *         description: Success
   *       400:
   *         description: Session not found
   */
appointmentRouter.get('/session/:session_id',makeCallback(getSession))





module.exports = appointmentRouter;
