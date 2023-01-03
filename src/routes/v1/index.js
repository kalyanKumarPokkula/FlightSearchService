const express = require("express");
const cityController = require("../../controllers/City-controller");
const airportController = require("../../controllers/Airport-controller");


const router = express.Router();

router.post('/city',cityController.create);
router.delete('/city/:id' , cityController.destroy);
router.get('/city/:id', cityController.get);
router.patch('/city/:id' , cityController.update);
router.get('/city' , cityController.getAll);
router.post('/cities' ,cityController.createBulkCities);
router.post('/airport' , airportController.create);
router.delete('/airport/:id',airportController.destroy);
router.get('/airport/:id' , airportController.getairport);
router.patch('/airport/:id' ,  airportController.update);


module.exports = router;