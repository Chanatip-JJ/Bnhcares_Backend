const path = require('path')
const dotenv = require('dotenv')
dotenv.config({path: path.join(__dirname,'..','..','..','.env')});
module.exports = function makeAdaptPaymentOrder({}){
    return async function adaptPaymentOrder(order){
        const {OrderDetails,...OrderHeader} = order[0]
        const MerchantID = getMerchantID(OrderHeader)
        const Invoice = getInvoice(OrderHeader)
        const Description = getDescription(JSON.parse(OrderDetails))
        const Amount = getAmount(OrderHeader)
        const Currency = getCurrency()
        const FrontendURL =  getFrontendURL(OrderHeader)
        const BackendURL = getBackendURL()

        const adaptedOrder = {
            merchantID: MerchantID,       
            invoiceNo: Invoice, 
            description: Description,
            amount: +Amount,
            currencyCode: Currency,
            frontendReturnUrl: FrontendURL, 
            backendReturnUrl: BackendURL, 
         }
         
         return JSON.stringify(adaptedOrder)
    } 
}

function getMerchantID({ORDHD_REF1}){
    if (ORDHD_REF1 == 1) {
        return process.env.CREDIT_MERCHANT_ID
    } else {
        return process.env.EWALLET_MERCHANT_ID
    }
}
function getDescription(OrderDetails){
    var totalPrice = 0
    var totalPackage = 0
    OrderDetails.forEach(order => {
        totalPrice += order.ORDDT_FINALPRICE
        totalPackage++
    })

    return  `There are ${totalPackage} packages with ${totalPrice} baht`
}

function getAmount({
    ORDHD_AMT
}){
    return ORDHD_AMT
}

function getInvoice({
    ORDHD_NO
}){ 
    const TOTAL_DIGIT = 9
    const INVOICE_CODE = addLeadingZero(ORDHD_NO,TOTAL_DIGIT)
    function addLeadingZero(num,totalLength){
        return String(num).padStart(totalLength,'0');
    }
    const YEAR = new Date().getFullYear()
    
    return `BNHCARE${YEAR}${INVOICE_CODE}` 
}

function getCurrency(){
    return 'THB'
}

function getFrontendURL({
    ORDHD_NO
}){
    const FrontendURL =  `${process.env.FRONTEND_RETURN_URL}/${ORDHD_NO}`
    return FrontendURL
}

function getBackendURL(){
    return process.env.BACKEND_RETURN_URL
}
