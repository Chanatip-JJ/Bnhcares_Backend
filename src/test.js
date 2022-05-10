const {DateTime,FixedOffsetZone} = require('luxon')
const validator = require('validator')

// const  req = {
//     "uid": ,
//     "name_th": "chemotherapy",
//     "name_en": "chemotherapy",
//     "description": "xxxxxxxxxxxxx",
//     "package_amount": 150000,
//     "status": "inactive"
// }

// if(req.uid !== undefined){
//     console.log(req.uid)
// }
 

// let formatter = new Intl.DateTimeFormat('en-US', { timeZone: "Asia/Bangkok" });   
// let thaiDate = formatter.format(u);
// console.log(thaiDate)

 //var a = '1994-12-16 09:24:15'
 //var b = new Date()
// a = setGMT(a)
// console.log(a)
// const c = DateTime.fromJSDate(u)
// const e = c.setZone(FixedOffsetZone.parseSpecifier("GMT+7")).plus({ hours: +7 })
// const t = e.toJSDate()
// console.log(t)
// const y = validator.isDate(t)
// console.log(y)
// console.log(b) 
// const q = validator.isDate(b)
// console.log(q)

const u = new Date('1994-12-16 09:24:15')
 
console.log(setGMT(u))
function setGMT(datetime){
    const newDate = new Date(datetime)
    const luxonDateTime = DateTime.fromJSDate(newDate)
    const adapted = luxonDateTime.setZone(FixedOffsetZone.parseSpecifier("GMT+7")).plus({hour:+7})
    return adapted.toJSDate()
}

//var date = new Date("2019-09-06T00:00:00.000Z");
// var ldate = DateTime.fromJSDate(u);
// var ldate= ldate.setZone('utc');
// console.log(ldate.toJSDate());