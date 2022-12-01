module.exports = function buildGetLogin(){
    return function makeGetLogin({
        username,
        password,
    } = {}) {
        if(!username){
            throw new Error('Username is required')
        }
        return Object.freeze({
            getUsername : () => username,
            getPassword : () => password,
           
        })
    }
}