const {AirplaneService} = require('../service/index');

const airplaneController = new AirplaneService();

const create = async (req ,res) =>{
    try {
        console.log(req.body);
        let airplane = await airplaneController.create(req.body);
        return res.status(201).json({
            data : airplane,
            status : true,
            message : "Successfully created a airplane",
            error : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            status : false,
            message : "Not about to create a airplane",
            error : error
        })
    }
}

module.exports = {
    create
}