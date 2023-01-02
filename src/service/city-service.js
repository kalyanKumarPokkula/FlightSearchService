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

    async getCity(cityId) {
        try {
            const city = await this.CityRepository.getCity(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async getAll(filter){
        try {
            let cities = await this.CityRepository.getAll({name : filter.name});
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }


}

module.exports = CityService;