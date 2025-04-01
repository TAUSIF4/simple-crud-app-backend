////////////////////////////////////////////////////////////////
//THIS FOLDER IS THE BRAIN OF THE PROJECT
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

/////////////////////////////////////////////////////////////////////
//Middel ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API server Updated");
});
//////////////////////////////////////////////////////////////////
//CODE TO READ THE DATA FROM THE DATABASE

//////////////////////////////////////////////////////////
//CODE TO READ THE SPECIFIC DATA FROM THE DATABASE BY THE ID

/////////////////////////////////////////////////////////////
//CODE TO CREATE AND SAVE NEW DATA IN THE DATABASE

/////////////////////////////////////////////////////////////////////
//CODE TO UPDATE THE SPECIFIC DATA FROM THE DATABASE BY THE ID

///////////////////////////////////////////////////////////////////////
//CONNECTING WITH MONGOOSE
mongoose
  .connect(
    "mongodb+srv://Tausif26:Tausif26@backenddb.wlj18za.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to data base!");
    app.listen(3000, () => {
      console.log("Server is running in port 3000");
    });
  })
  .catch((err) => {
    console.log("Not connected to data base!");
  });
///////////////////////////////////////////////////////////////////
//DELETE A PRODUCT BY ID
