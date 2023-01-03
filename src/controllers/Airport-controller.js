const {AirportService} = require("../service/index");

const airportService = new AirportService();

const create = async (req , res) => {
    try {
        let response = await airportService.createAirport(req.body);
        return res.status(201).json({
            data : response,
            success : true,
            message : "Successfully created a airport ",
            err : {}

        })   
    } catch (error) {
        console.log("something went wrong in the controller");
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able create a airport",
            err : error
        })
    }
}

const destroy = async (req , res) =>{
    try {
        console.log(req.params);
        let response = await airportService.deleteAirport(req.params.id);
        return res.status(201).json({
            data : response,
            success : true,
            message : "Successfully deleted a airport ",
            err : {}

        })   
        
    } catch (error) {
        console.log("something went wrong in the controller");
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able delete a airport",
            err :error 
        })
    }
}

const update = async (req ,res) => {
    try {
       let response = await airportService.updateAirport(req.params.id , req.body);
       return res.status(200).json({
            data : response,
            success :true,
            message : "Successfully updated a airport",
            err : {}
       }) 
    } catch (error) {
        console.log("something went wrong in the controller");
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able update a airport",
            err : error
        })
    }
}

const getairport = async (req ,res) => {
    try {
        let response = await airportService.getAirport(req.params.id);
        return res.status(200).json({
            data :response,
            success : true,
            message : "Successfully got a airport",
            err : {}
        })
    } catch (error) {
        console.log("something went wrong in the controller");
        return res.status(500).json({
            data : {},
            success : false,
            message : "Not able get a airport",
            err : error
        })
    }

}




module.exports = {
    create,
    destroy,
    update,
    getairport

}