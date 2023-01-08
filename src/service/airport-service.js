
const {airportRepository} = require("../repository/index");
const CrudService = require("./crud-service");

class AirportService extends CrudService{

    constructor(){
        const AirportRepository = new airportRepository();
        super(AirportRepository)
    }

    // async createAirport(airport){
    //     try {
    //         let response = await this.AirportService.createAirport(airport);
    //         return response
    //     } catch (error) {
    //         console.log("something went wrong in the service");
    //         throw {error};
    //     }
    // }

    // async deleteAirport(airportId){
    //     try {
    //         let response = await this.AirportService.deleteAiport(airportId);
    //         return response
    //     } catch (error) {
    //         console.log("something went wrong in the service");
    //         throw {error};
    //     }
    // }

    // async updateAirport(airportId , data){
    //     try {
    //         let response = await this.AirportService.updateAirport(airportId , data);
    //         return response;
    //     } catch (error) {
    //         console.log("something went wrong in the service");
    //         throw {error};
    //     }
    // }

    // async getAirport(airportId){
    //     try {
    //         let response = await this.AirportService.getAirport(airportId);
    //         return response
    //     } catch (error) {
    //         console.log("something went wrong in the service");
    //         throw {error};
    //     }
    // }

}

module.exports = AirportService;