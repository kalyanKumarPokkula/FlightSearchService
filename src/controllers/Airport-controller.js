const {AirportService} = require("../service/index");

const airportService = new AirportService();

const create = async (req , res) => {
    try {
        let response = await airportService.create(req.body);
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
        let response = await airportService.delete(req.params.id);
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
       let response = await airportService.update(req.params.id , req.body);
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

const getAirport = async (req ,res) => {
    try {
        console.log(req.query);
        // const id = req.query.id;
        const id = req.params.id;
        console.log(id);
        let response = await airportService.get(id);
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

const getAllAirport = async (req ,res) => {
    try {
        
        let response = await airportService.getAll();
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
            err : {error}
        })
    }

}



module.exports = {
    create,
    destroy,
    update,
    getAirport,
    getAllAirport

}