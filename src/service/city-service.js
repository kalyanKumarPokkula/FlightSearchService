const { cityRepository } = require("../repository/index");

class CityService{


    constructor(){
        this.CityRepository = new cityRepository();
    }

    async createCity(data){
        try {
            const response = await this.CityRepository.createCity(data);
            return response;
        } catch (error) {
            console.log("something went wrong in the service");
            throw {error};
        }
    }

    async deleteCity(data){

        try {
            const response = await this.CityRepository.deleteCity(data);
            return response;
        } catch (error) {
            console.log("something went wrong in the service");
            throw {error};
        }
    }

    async updateCity(cityid ,data){
        try {
            const response = await this.CityRepository.updateCity(cityid ,data);
            return response;
        } catch (error) {
            console.log("something went wrong in the service");
            throw {error};
        }
    }

    async getCity(data){
        try {
            const response = await this.cityRepository.getCity(data);
            return response;
        } catch (error) {
            console.log("something went wrong in the service");
            throw {error};
        }
    }
}

module.exports = CityService;