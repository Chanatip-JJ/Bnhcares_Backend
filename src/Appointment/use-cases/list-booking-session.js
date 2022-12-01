

module.exports = function makeListBookingSession({BookingSessionAccessDB}){
    return async function listSession({params}){
        if(!params){
            throw new Error('You must supply a session id.')
        }
        const SessionID = params.session_id
        const SessionDetail = BookingSessionAccessDB.find(SessionID)
        return SessionDetail      
    }
}