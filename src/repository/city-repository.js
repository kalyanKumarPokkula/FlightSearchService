const { City } = require("../models/index");

class cityRepository{

    async createcity({ name }){
        try {

            const city =  await City.create({name});
            return city;
            
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error};
        }
    }

    async deletecity(cityid){
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

    async updatecity(cityid , data){
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

    async getcity(cityid){
        try {
            const city = await City.findByPk(cityid);
            return city;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error};
        }
    }
}


module.exports = cityRepository;
