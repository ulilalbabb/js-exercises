const passenger = ['ulil', undefined, 'prima']
const addPassengers = (passengerName, passenger) => {
    // if empty transportation
    if ( passenger.length == 0 ) {
        // add passenger in begin array
        // return array & exit from function
        passenger.push(passengerName)
        return passenger
    // else
    } else {
        // search all chairs from begin
        for ( let i = 0; i < passenger.length; i++ ) {
            // if empty chair
            if ( passenger[i] == undefined) {
                // add passenger in that chair
                // return array & exit form function
                passenger[i] = passengerName
                return passenger
            }
            // if there are same passenger name 
            else if (passenger[i] == passengerName) {
                // show the wrong message
                // return array & exit from function
                console.log(passengerName + ' is exist in the transportation')
                return passenger
            }
                // if all of the chairs are full
            else if ( i == passenger.length - 1) {   
                // add passenger in the last array
                // return array & exit from function   
                passenger.push(passengerName)
                return passenger
            }
        }
    }
}