const express = require("express");
const boby_parser = require("body-parser");

const { PORT } = require("./config/serverconfig");
const cityRepository = require("./repository/city-repository")

const setupserverandstart = async () =>{

    // create a express object
    let app = express();

    app.use(boby_parser.json());
    app.use(boby_parser.urlencoded({extended : true}));

    app.listen(PORT , async () =>{
        console.log(`server started at ${PORT}`);
        console.log(process.env.PORT);

        const repo = new cityRepository();
        repo.createcity({name:"Kolkata"});
    })
}

setupserverandstart();