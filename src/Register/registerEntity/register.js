module.exports = function buildRegister({bcrypt}){
    return async function makeRegister({
        username,
        password,
        confirm_password
    }){
        // const salt = await bcrypt.genSaltSync(10)
        let encryptedPwd = await bcrypt.hash(confirm_password, 10)

        return Object.freeze({
            getUsername : () => username,
            getPassword : () => encryptedPwd,
            getConfirmPassword : () => encryptedPwd
        })
    }
}
