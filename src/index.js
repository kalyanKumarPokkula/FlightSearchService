const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverconfig");
const ApiRoutes = require("./routes/index");




const setupserverandstart = async () =>{

    // create a express object
    let app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));


    app.use('/api' , ApiRoutes);





    app.listen(PORT , async () =>{
        console.log(`server started at ${PORT}`);
        console.log(process.env.PORT);

        
    })
}

setupserverandstart();