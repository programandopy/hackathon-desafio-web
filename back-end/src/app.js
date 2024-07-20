const express = require("express");
const mongoose = require("mongoose");
const app = express();
const mapsApi = require("./api/MapsApi");
const userApi = require("./api/UserApi");
const securityApi = require("./api/SecurityApi");
const categoryApi = require("./api/CategoryApi");
const cors = require("cors");
const path = require('path');

require("dotenv").config();

//middleware
app.use(express.json());
app.use(cors());
//app.use('/images', express.static(path.join(__dirname, '/home/tilleria/Downloads')));

//database connection
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to database!");
    app.listen(8001, () => {
      console.log("Server is running on port 8001");
    });
  })
  .catch(() => console.log("Connection failed!"));

//routes
app.use("/api/maps/", mapsApi);
app.use("/api/user/", userApi);
app.use("/api/security/", securityApi);
app.use("api/registro", securityApi.register);
app.use("/api/category/", categoryApi);

module.exports = app;
