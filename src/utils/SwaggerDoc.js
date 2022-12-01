const swaggerUI = require('swagger-ui-express')
const swaggerJsdoc = require('swagger-jsdoc')
const path = require('path')

const ArrayOfEntity = [ `${path.join(__dirname,'../routes/*.js')}`,
                        `${path.join(__dirname,'../AdditionalCareprovider/AdditionalCareproviderEntity/*.js')}`,
                        `${path.join(__dirname,'../Appointment/AppointmentEntity/*.js')}`,
                        `${path.join(__dirname,'../Careprovider/CareproviderEntity/*.js')}`,
                        `${path.join(__dirname,'../Cart/CartEntity/*.js')}`,
                        `${path.join(__dirname,'../Category/CategoryEntity/*.js')}`,
                        `${path.join(__dirname,'../Department/DepartmentEntity/*.js')}`,
                        `${path.join(__dirname,'../DoctorAppointMentManagement/DoctorAppointMentManagementEntity/*.js')}`,
                        `${path.join(__dirname,'../login/loginEntity/*.js')}`,
                        `${path.join(__dirname,'../Line/LineEntity/*.js')}`,
                        `${path.join(__dirname,'../Notification/NotificationEntity/*.js')}`,
                        `${path.join(__dirname,'../Order/OrderEntity/*.js')}`,  
                        `${path.join(__dirname,'../OTP/OTPEntity/*.js')}`,
                        `${path.join(__dirname,'../Package/PackageEntity/*.js')}`,
                        `${path.join(__dirname,'../PackageCareProvider/PackageCareProviderEntity/*.js')}`,
                        `${path.join(__dirname,'../Payment/PaymentEntity/*.js')}`,
                        `${path.join(__dirname,'../Person/PersonEntity/*.js')}`,
                        `${path.join(__dirname,'../Patient/PatientEntity/*.js')}`,
                        `${path.join(__dirname,'../PatientVisit/PatientVisitEntity/*.js')}`,
                        `${path.join(__dirname,'../Speciality/SpecialityEntity/*.js')}`,
                        `${path.join(__dirname,'../Withdrawal/WithdrawalEntity/*.js')}`,
                       ]
const options = {
    definition :{
        openapi: "3.0.0",
        info:{
            title:'BNHCARES API',
            version:'1.0.0',
            description:'This is BNHCARES-API document'
        },
        servers:[
            {
                url:`https://localhost:8000`,
                description: "Local dev"
            },
            {
                url:`https://bnhcaresb.bnhhospital.com:18980`,
                description: "staging server"
            }
        ],
    },
    apis: ArrayOfEntity,
}

const swaggerSpec = swaggerJsdoc(options)

function swaggerDoc(app){
    // Swagger page
    app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerSpec))  
}

module.exports = swaggerDoc


