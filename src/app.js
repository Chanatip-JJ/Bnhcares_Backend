//####################################################################
const path = require('path')
require('dotenv').config({
    path: path.join(__dirname,'..',`.env.${process.env.NODE_ENV}`)
})
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const swaggerDoc = require('./utils/SwaggerDoc')
const cookieParser = require('cookie-parser')
//####################################################################




//###################################################
//* THIS IS FOR ROUTER */
//###################################################
const additionalCareprovider = require('./routes/additionalcareprovider.router')
const appointmentRouter = require('./routes/appointment.router')
const bannerRouter = require('./routes/banner.router')
const careproviderRouter = require('./routes/careprovider.router')
const cartRouter = require('./routes/cart.router')
const categoryRouter = require('./routes/category.router')
const departmentRouter = require('./routes/department.router')
const doctorAppointmentManagementRouter = require('./routes/DoctorAppointmentManagement.router')
const lineRouter = require('./routes/line.router')
const loginRouter = require('./routes/login.router')
const notificationRouter = require('./routes/notification.router')
const OTPRouter = require('./routes/otp.router')
const orderRouter = require('./routes/order.router')
const packageRouter = require('./routes/packages.router')
const packageCareproviderRouter = require('./routes/packageCareprovider.router')
const patientRouter = require('./routes/patient.router')
const patientVisitRouter = require('./routes/patientVisit.router')
const paymentRouter = require('./routes/payment.router')
const personRouter = require('./routes/person.router')
const specialityRouter = require('./routes/speciality.router')
const registerRouter = require('./routes/register.router')
const withdrawalRouter = require('./Routes/withdrawal.router')
//###################################################


const app  = express()

app.use(helmet())
app.use(cors({
    // origin : "http://localhost:8080",
    // credentials: true,
  }))
app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//* activate swagger page
swaggerDoc(app)


//###################################################
// API calls each endpoints
app.use('/additionalCareprovider',additionalCareprovider)
app.use('/appointment',appointmentRouter)
app.use('/banner',bannerRouter)
app.use('/careprovider',careproviderRouter) 
app.use('/cart',cartRouter)
app.use('/category',categoryRouter)
app.use('/department',departmentRouter)
app.use('/doctorAppointmentManagement',doctorAppointmentManagementRouter)
app.use('/line',lineRouter)
app.use('/login',loginRouter)
app.use('/notification',notificationRouter)
app.use('/otp',OTPRouter)
app.use('/order',orderRouter)
app.use('/packages',packageRouter)
app.use('/packageCareProvider',packageCareproviderRouter)
app.use('/patient',patientRouter)
app.use('/patient-visit',patientVisitRouter)
app.use('/payment',paymentRouter)
app.use('/person',personRouter)
app.use('/speciality',specialityRouter)
app.use('/register',registerRouter)
app.use('/withdrawal',withdrawalRouter)

module.exports = app