const fs = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')
module.exports = function makeGetInvoice({OrderHeaderAccessDB,
                                         makeGetOrderHeader
                                         }){          
    return async function listInvoice({params}){
        if(!params){
            throw new Error('You must supply a order id.')
        }
        const OrderHeaderEntity = makeGetOrderHeader({
          ORDHD_NO : params.order_id
        })
        
        const Order = await OrderHeaderAccessDB.getInvoice({OrderHeaderEntity})

        const {OrderDetails,...OrderHeader} = Order[0]
        
        const Details = JSON.parse(OrderDetails)
        
        const invoicePath = path.join(__dirname,'..','..','..','..','invoices',`${OrderHeader.invoiceNo}.pdf`)
        
        
        const image = path.join(__dirname,'..','..','..','src','Data','image','BNH_Logo.jpg')
        const ThaiFont = path.join(__dirname,'..','..','..','src','Data','fonts','Cordia','CORDIA.ttf')
        const doc = new PDFDocument({size: "A4", margin: 50})
        doc.registerFont('Cordia',ThaiFont)
        generateHeader(doc,image);
        generateFooter(doc);
        generateCustomerInformation(doc,OrderHeader)
        generateInvoiceTable(doc, Details);
        doc.pipe(fs.createWriteStream(invoicePath))
        doc.end()
        return  {path:invoicePath, 
                 filename: `${OrderHeader.invoiceNo}.pdf`}
    }
     
    function generateHeader(doc,image) {
         doc.fontSize(15)
            .text('TEMPORARY RECEIPT',{align: 'center'})
            .image(image,{height:70 ,width: 60,align:'left'})
            .moveDown()
            .fillColor('#0f0101')
            .fontSize(10)
            .text('BNH Medical Centre Ltd.', 200, 85, { align: 'right' })
            .moveDown()
            .fontSize(10)
            .text('9/1, Convent Road,Silom Bangkok 10500', 200, 100, { align: 'right' })
            .moveDown()
            .fontSize(10)
            .text('Tel. 02-022-0700 Fax. 02-686-2778', 200, 115, { align: 'right' })
            .moveDown();
    }
    function generateFooter(doc) {
        doc.fontSize(10)
            .text('Remark',50,710,{ align: 'left'})
            .text('- Please make an appointment prior to using the service by Line@ BNHHospital menu Appointment ',50,723,{align: 'left' })
            .text('- Please present Order No/Invoice No. to our staff before using service',{ align: 'left' })
            .text('- This package cannot be exchanged for cash',{ align: 'left' })
            .text('- This package allow usage 1 person only', { align: 'left' })
    }

    function generateCustomerInformation(doc, OrderHeader) {
        const position = 140
        
        var english = /^[A-Za-z]*$/;
        generateHr(doc, 145);
        doc.text(`Invoice Number: ${OrderHeader.invoiceNo}`, 50, position + 15,{ align: 'left'})
           .text(`Invoice Date: ${new Date().toLocaleString('en-GB',{
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "GMT"
              })}`, 50, position + 30 ,{ align: 'left'})
            .text(`Order Date: ${new Date(OrderHeader.date_created).toLocaleString('en-GB',{
                year: "numeric",
                month: "long",
                day: "numeric",
                timeZone: "GMT"
              })}`, 50, position + 45,{ align: 'left'})
            .text(`Payment Method: ${OrderHeader.Payment}`,50, position + 60,{ align: 'left'})
            
            .text('Bill to:',300,position + 15,{ align: 'right' })
            .text(`Tel :${OrderHeader.PERSON_MOBILE || ' '}`, 300, position + 45,{ align: 'right' })
            .text(`E-mail : ${OrderHeader.PERSON_EMAIL|| ' '}`,300,position + 60,{ align: 'right' })
            generateHr(doc, 220);
            
            if(!english.test(OrderHeader.PERSON_FNAME)){
              doc.font('Cordia').fontSize(15).text(`${OrderHeader.PERSON_FNAME} ${OrderHeader.PERSON_LNAME}`, 300, position + 23,{ align: 'right' })   
            }else{
              doc.text(`${OrderHeader.PERSON_FNAME} ${OrderHeader.PERSON_LNAME}`, 300, position + 30,{ align: 'right' })  
            }
    }

    function generateInvoiceTable(doc, Details) {
        let i;
        let sum = 0;
        const invoiceTableTop = 250;
        
        doc.font('Helvetica-Bold')
        generateTableRow(
          doc,
          invoiceTableTop,
          "Description",
          "Quantity",
          "Total (Baht)"
        );
        generateHr(doc, invoiceTableTop + 20);

        doc.font('Helvetica'); 
        for (i = 0; i < Details.length; i++) {
          const item = Details[i];
          const position = invoiceTableTop + (i + 1) * 30;
          generateTableRow(
            doc,
            position,
            item.ORDDT_NAMEEN,
            item.Quantity,
            formatCurrency(item.Total),
          );
          generateHr(doc, position + 20);
          sum = sum + item.Total
        }
    
        const subtotalPosition = invoiceTableTop + (i + 1) * 30;
        doc.font("Helvetica-Bold");
        generateTableRow(
          doc,
          subtotalPosition,
          "",
          "Total",
          formatCurrency(sum)
        );    
    }
    
    function generateTableRow(
        doc,
        y,
        description,
        quantity,
        lineTotal
        ) {
        doc
            .fontSize(10)
            .text(description, 50, y)
            .text(quantity, 370, y,{ width: 90, align: "right" })
            .text(lineTotal, 0, y, { align: "right" });
    }        

    // draw line
    function generateHr(doc, y) {
        doc
        .strokeColor("#aaaaaa")
        .lineWidth(1)
        .moveTo(50, y)
        .lineTo(550, y)
        .stroke();
    }
    // change currency format
    function formatCurrency(Baht) {
        return new Intl.NumberFormat('th-TH', {minimumFractionDigits:2, maximumFractionDigits:2}).format(Baht)
      }
    
      
}