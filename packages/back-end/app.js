const express = require("express");



const app = express();

let obj = {message: "Hi"};

app.use((req, res, next) => {
    res.json(JSON.stringify())
})



app.listen(3000, () => {
    console.log("Server is Listening on port 3000...");
})