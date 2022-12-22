const { City } = require("../models/index");

class cityRepository{

    async createcity({ name }){
        try {

            const city =  await City.create({name});
            return city;
            
        } catch (error) {
            throw {error};
        }
    }

    async deletecity(cityid){
        try {

            await City.destory({
                where : {
                    id:cityid
                }
            })
            
        } catch (error) {
            throw {error};
        }
    }
}


module.exports = cityRepository;
