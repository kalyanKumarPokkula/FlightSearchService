const {FlightService} = require("../service/index");

const flightservice = new FlightService();

const create = async (req ,res) =>{
    try {
        const data = req.body;
        console.log(data);
        const flight = await flightservice.createFlight(data);
        return res.status(201).json({
            data : flight,
            success : true,
            message : "Successfully created a flight",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }
}

const getAllFlights = async (req , res) =>{

    try {
        const flight = await flightservice.getAllFlights(req.query);
        return res.status(200).json({
            data : flight,
            success : true,
            message : "Successfully got a flights",
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }
}

module.exports = {
    create,
    getAllFlights
}