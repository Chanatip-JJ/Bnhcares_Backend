module.exports = function makeCheckLine({lineAccessDB,makeLine}){
    return async function checkLine({params}){ 
        if(!params){
            throw new Error('No params')
        }
        const line = await lineAccessDB.find({params})
        return line
    }
}