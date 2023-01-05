const {Airplane} = require("../models/index");

class airplaneRepository{

    async getAirplane(id){
        try {
            let airplane = await Airplane.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error}
        }
    }
}


module.exports = airplaneRepository;