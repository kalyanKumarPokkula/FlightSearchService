const { Op } = require('sequelize');

const { City } = require("../models/index");

class cityRepository{

    async createCity({ name }){
        try {

            const city = await City.create({
                name
            });
            return city;
            
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error};
        }
    }

    async deleteCity(cityid){
        try{
            await City.destroy({
                where: {
                  id: cityid
                }
              });
        }catch (error) {
            console.log("something went wrong in the repository");
            throw {error};
        }
    }

    async updateCity(cityid , data){
        try {

            const city = await City.update(data , {
                where : {
                    id : cityid
                }
            });

            return city;
            
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error};
        }
    }

    async getCity(cityid){
        try {
            const city = await City.findOne({
                where : {
                    id : cityid
                }
            });
            return city;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error};
        }
    }

    async getAll(filter){
        try {
            if(filter.name){
                let cities = await City.findAll({
                    where : {
                        name :{
                            [Op.startsWith] : filter.name
                        }
                    }
                })
                return cities;
            }
            let cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error}
        }
    }

    async createBulkCities(bulk){

        try {
            let city = await City.bulkCreate(bulk);
            return city;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error}
        }

    }


}


module.exports = cityRepository;
