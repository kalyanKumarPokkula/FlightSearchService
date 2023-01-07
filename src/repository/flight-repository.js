
const {Flight } = require('../models/index');

const { Op } = require("sequelize");


class FlightRepository{

    #createfilter(data){

        
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId
        }
        if(data.deparureAirportId){
            filter.departureAirportId = data.departureAirportId
        }
        // if(data.minprice && data.maxprice){
        //     Object.assign(filter ,{
        //         [Op.and] : [
        //             {price : {[Op.lte] : data.maxprice}},
        //             {price : {[Op.gte] : data.minprice}}
        //          ]
        //     })
        // }
        let pricefilter = [];

        if(data.minprice){
            pricefilter.push({price : {[Op.gte] : data.minprice}})
            // Object.assign(filter , {price : {[Op.gte] :data.minprice}})
        }
        if(data.maxprice){
            pricefilter.push({price : {[Op.lte] : data.maxprice}})
            // Object.assign(filter , {price : {[Op.lte] : data.maxprice}})
        }
        Object.assign(filter , {[Op.and] : pricefilter});
        console.log(pricefilter);
        return filter;

    }

    async createFlight(data){
        try {
            let flight = await Flight.create(data);
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error}
        }
    }

    async deleteFlight(FlightId){
        try {
            let flight = await Flight.destroy({
                where : {
                    id : FlightId
                }
            })
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error}
        }
    }

    async updateFlight(data  , FlightId){
        try {
            let flight = await Flight.update(data , {
                where : {
                    id : FlightId
                }
            });
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error}
        }
    }

    async getFlight(){

    }

    async getAllFlights(data){
        try {
            let filter = this.#createfilter(data);
            console.log(filter);
            let flight = await Flight.findAll({
                where : filter
            });
            return flight;
        } catch (error) {
            console.log("something went wrong in the repository");
            throw {error}
        }
    }
}

module.exports = FlightRepository
/*

where : {
    arrivalAirportId : 2,
    departureAirportId :8,
    price : {[OP:gte] : 4000}

}


*/