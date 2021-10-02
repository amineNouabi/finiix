const path = require('path');
const express = require("express");
const morgan  = require("morgan");


const app = express();

/* if(process.env.NODE_ENV === "development")  app.use(morgan('dev'));*/ 


app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "front-end", "index.html"));
});



module.exports = app;