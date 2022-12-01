const BannerAccessDB = require('../data-access')

const makeListBanner = require('./list-banner')

const {
    makeGetBanner
} = require('../BannerEntity')

const listBanner = makeListBanner({BannerAccessDB,makeGetBanner})

module.exports = {
    listBanner
}
