const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: './config.env'});
const PORT = process.env.PORT || 3000;

const app = require('./app');

/*
mongoose
    .connect(process.env.DATABASE_LOCAL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindModify: false
    })
    .then(() => console.log("Database connection successful!"));
*/

app.listen(PORT, () => {
    console.log("App is running on port: " + PORT + "...");
});