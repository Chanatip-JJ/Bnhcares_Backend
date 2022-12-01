module.exports = function makeListBanner({BannerAccessDB,makeGetBanner}){
    return async function listBanner({query} = {}){
        const BannerEntity = makeGetBanner(query)
        const banner =  await BannerAccessDB.findAll({BannerEntity})
        return banner         
    }
}