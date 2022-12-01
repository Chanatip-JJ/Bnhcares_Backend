module.exports = function buildGetLine(){
    return function makeGetLine({
        line_id,
        hn,
    } = {}) {
        
        return Object.freeze({
            getLineID : () => line_id || null,
            getHN : () => hn || null,           
        })
    }
}