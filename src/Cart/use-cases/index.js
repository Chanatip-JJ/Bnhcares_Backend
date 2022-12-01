const CartAccessDB = require('../data-access')


const makeListCart = require('./list-cart')
const makeClearCart = require('./remove-clear-cart')
const makeRemoveCart = require('./remove-cart') 
const makeAddCart = require('./add-cart')
const makeEditCart = require('./edit-cart')

const {
    makeCart,
    makeGetCart
} = require('../CartEntity')

const listCart = makeListCart({CartAccessDB,makeGetCart})
const removeCart = makeRemoveCart({CartAccessDB,makeGetCart})
const addCart = makeAddCart({CartAccessDB,makeCart})
const editCart = makeEditCart({CartAccessDB,makeCart,makeGetCart})
const removeCartAll = makeClearCart({CartAccessDB,makeGetCart})

module.exports = {
    listCart,
    removeCart,
    removeCartAll,
    addCart,
    editCart
}

