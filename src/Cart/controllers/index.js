const {listCart,
      removeCart,
      removeCartAll,
      addCart,
      editCart
      } = require('../use-cases');
      

const makeGetCart = require('./get-cart')
const makeRemoveCart = require('./delete-cart')
const makeRemoveClearCart = require('./delete-cart-clear')
const makeAddCart =require('./post-cart')
const makeEditCart = require('./patch-cart')


const getCart = makeGetCart({listCart});
const deleteClearCart = makeRemoveClearCart({removeCartAll})
const deleteCart = makeRemoveCart({removeCart})
const postCart = makeAddCart({addCart})
const patchCart = makeEditCart({editCart})

module.exports = {
  getCart,
  deleteCart,
  deleteClearCart,
  postCart,
  patchCart
};

