module.exports = function buildLine({}){
    return async function makeLine({
        Channel,
        HN
    }){
        return Object.freeze({
            getChannel:() => Channel,
            getHN:() => HN      
    })
    }
}