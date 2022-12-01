const {LineAccessDB} = require('../data-access')
const makeLineLogin = require('./line-login')


const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const {
    makeLine,
} = require('../LineEntity')

const LineLogin = makeLineLogin({LineAccessDB, makeLine, jwt})


 

module.exports = {
    LineLogin
}