const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverconfig");
const ApiRoutes = require("./routes/index");

const {Airplane} = require("./models/index");
const {airplaneRepository} = require('./repository/index');






const setupserverandstart = async () =>{

    // create a express object
    let app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));


    app.use('/api' , ApiRoutes);



    app.listen(PORT , async () =>{
        console.log(`server started at ${PORT}`);
        console.log(process.env.PORT);

        // const city = await City.findAll({
        //     where :{
        //         id : 8
        //     },
        //     include : [{
        //         model : Airport
        //     }]
        // })

        // db.sequelize.sync({alter : true});

        // const city = await City.findOne({
        //     where :{
        //         id : 8
        //     }
        // })


        // const airports = await city.getAirports();
        // console.log(airports);

        // console.log(city);
        const obj = new airplaneRepository();
        const temp = await obj.getAirplane(1);
        
        
        

        


        

        
    })
}

setupserverandstart();