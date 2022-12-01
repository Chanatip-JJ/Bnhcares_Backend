const axios = require('axios').default
const querystring = require('querystring');
const path = require('path')
const parseString = require('xml2js').parseString

require('dotenv').config({
    path: path.join(__dirname,'..','..','..','.env')
})
module.exports = function makeListPatientVisitImage({}){
    return async function listPatientVisitImage({params} = {}){
        if(!params){
            throw new Error('You must supply params')
        }
        
       const xml = await fetchImageObjectID(params)
       var result = parseString(xml)
       console.log(result)
       return result

    }
    async function fetchImageObjectID({patient_uid,accessionNumber}){
        const options = {
            requestType:'Query',
            User : process.env.XRAY_USER,
            Password: process.env.XRAY_PASSWORD,
            contentType: 'text/xml',
            patientID: patient_uid,
            accessionNumber: accessionNumber
          };
          const respond =  await axios.get(`${process.env.XRAY_URL}?${querystring.stringify(options)}`)//process.env.XRAY_URL,
          
          
          return respond.data
    }
}