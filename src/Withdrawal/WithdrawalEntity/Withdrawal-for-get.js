module.exports = function buildGetWithdrawal({}) {
    return function makeGetWithdrawal({
         uid, 
         careprovider_uid ,
		 location_uid ,
		 start_date ,
		 end_date ,
		 start_time ,
		 end_time,
         selected_date,
         status, 
} = {}) {
    
    return Object.freeze({
        getUID : () => uid || null,
        getCareprovider_uid : () => careprovider_uid || null,
        getLocation_uid: () => location_uid || null,
        getStartDate : () => start_date || null,
        getEndDate : () => end_date || null,
        getStartTime : () => start_time || null,
        getEndTime:() => end_time || null,
        getSelectedDate:() => selected_date || null,
        getStatus : () => status || null
    })
}
}


