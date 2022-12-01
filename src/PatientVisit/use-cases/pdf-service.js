const PDFDocument = require('pdfkit')

module.exports = function buildPDFDocument(dataCallback,endCallback){
    const doc = new PDFDocument()
    doc.on('data', dataCallback)
    doc.on('end', endCallback)
    doc.fontSize(25)
       .text('Hello world')
    doc.end()
}