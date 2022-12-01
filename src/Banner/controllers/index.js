const {listBanner} = require('../use-cases');
      
const makeGetBanner = require('./get-banner');

const getBanner = makeGetBanner({listBanner});

module.exports = {
  getBanner
};

