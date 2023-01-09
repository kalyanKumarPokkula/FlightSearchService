const express = require("express");

const { FlightMiddleware } = require('../../middlewares/index');

const cityController = require("../../controllers/City-controller");
const airportController = require("../../controllers/Airport-controller");
const flightController = require("../../controllers/flight-controller");
const airplaneController = require("../../controllers/Airplane-controller");


const router = express.Router();

router.post('/city',cityController.create);
router.delete('/city/:id' , cityController.destroy);
router.get('/city/:id', cityController.get);
router.patch('/city/:id' , cityController.update);
router.get('/city' , cityController.getAll);

router.post('/cities' ,cityController.createBulkCities);

router.post('/airport' , airportController.create);
router.delete('/airport/:id',airportController.destroy);
router.get('/airport/:id' , airportController.getAirport);
router.get('/airport' , airportController.getAllAirport);
router.patch('/airport/:id' ,  airportController.update);

router.post(
    '/flights' ,
    FlightMiddleware.validateCreateFlight, 
    flightController.create
    );
router.get('/flights' ,flightController.getAllFlights);

router.post('/airplanes' , airplaneController.create);


module.exports = router;