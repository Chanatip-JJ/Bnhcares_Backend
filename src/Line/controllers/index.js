const {LineLogin} = require('../use-cases')

const makePostLineLogin = require('./get-line')


const postLineLogin = makePostLineLogin({LineLogin})


module.exports = {
    postLineLogin
}