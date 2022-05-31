const express = require("express");
const cookieParser = require("cookie-parser");
const routers = require("./routers");
const session = require("express-session");
const mongoConnect = require("./mongoDB")

// dotenv library
require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();

// connect database 'mongoDB'
mongoConnect();

app.use(express.json());
//app.use(express.urlencoded());
app.use(cookieParser());
app.use(session({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false
}));

// signin & signup routes
app.use("/api/v1", routers);

// home route
app.get("/api/v1", (req, res) => { 
  try {
    res.send("home route is working")
  } catch (error) {
    console.log(error.message)
  }
 })

// run server
app.listen(port, console.log(`server conencted on port ${port}`));
