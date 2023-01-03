const { Airport } = require("../models/index");


class AirportRepository{

    async createAirport(airport){
        try {
            let response = await Airport.create(airport);
            return response;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error}
        }
    }

    async deleteAiport(airportId){
        try {
            let response = await Airport.destroy({
                where :{
                    id : airportId
                }
            })
            return response;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error}
        }
    }

    async updateAirport(airportId , data){
        try {
            let response = await Airport.update(data ,{
                where : {
                    id : airportId
                }
            })
            return response;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error}
        }
    }

    async getAirport(airportId){
        try {
            let response = await Airport.findByPk(airportId);
            return response;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error}
        }
    }
}


module.exports = AirportRepository;