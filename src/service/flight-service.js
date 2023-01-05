const {flightRepository , airplaneRepository} = require("../repository/index");
const {compareTime,compareDate} = require('../utils/helper');

class FlightService{

    constructor(){
        this.AirplaneRepository = new airplaneRepository();
        this.FlightRepository = new flightRepository();
    }

    async createFlight(data){
        try {
            if(!compareDate(data.arrivalTime , data.departureTime)){
                throw {error : "Arrival date cannot be less than depature Date"}
            }
            //compareTime 
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error : "Arrival time cannot be less than depature time"}
            }
            let airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);
            let flight = await this.FlightRepository.createFlight({...data , totalSeats : airplane.capacity});
            return flight; 
        } catch (error) {
            console.log("something went wrong in the service");
            throw {error}
        }
    }
}

module.exports = FlightService;

/**
 *  {
 *      flightNumber,
 *      airplaneId,
 *      departureAirportId,
 *      arrivalAirportId,
 *      arrivalTime,
 *      departureTime,
 *      price,
 *      totalseats --> airplane
 *      
 * }
 */