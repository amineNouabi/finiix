const path = require("path");


const express = require('express');



const app= express();


app.use((req, res) => {
    res.sendFile(path.join(__dirname, "..", "front-end", "index.html"));
})

app.listen(3000, () => {
    console.log("Server Listening on port 3000 ...");
});