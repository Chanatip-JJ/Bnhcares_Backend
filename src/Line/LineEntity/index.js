
const buildGetLine = require('./get-line')
const buildLine = require('./line')


const makeGetLine = buildGetLine()
const makeLine = buildLine()


module.exports = {
    makeGetLine,
    makeLine
}