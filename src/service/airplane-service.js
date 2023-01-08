const {airplaneRepository} = require("../repository/index");
const CrudService = require("./crud-service");

class AirplaneService extends CrudService{
    constructor(){
        const AirplaneRepository = new airplaneRepository();
        super(AirplaneRepository);
    }
}


module.exports = AirplaneService;