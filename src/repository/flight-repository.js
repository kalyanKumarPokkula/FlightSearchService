
const {Flight } = require('../models/index');


class FlightRepository{

    async createFlight(data){
        try {
            let flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error}
        }
    }
}

module.exports = FlightRepository
