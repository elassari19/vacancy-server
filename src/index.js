// import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import routers from "./routers";
import session from "express-session";
import { mongoDB, cloudinary } from "./config";
import express from "express";
import cors from "cors";

// app.use("/", express.static(resolve(__dirname, "../public")));

// dotenv library
require("dotenv").config();

// cloudinary config
cloudinary();

const port = process.env.PORT || 5000;
const app = express();

// connect database 'mongoDB'
mongoDB();

app.use(cors());
app.use(express.json());
//app.use(express.urlencoded());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// signin & signup routes
app.use("/api/v1", routers);

// home route
app.get("/api/v1", (req, res) => {
  try {
    res.send("home route is working");
  } catch (error) {
    console.log(error.message);
  }
});

// home route
app.get("/", (req, res) => {
  try {
    res.send("home route is working");
  } catch (error) {
    console.log(error.message);
  }
});

// run server
app.listen(port, console.log(`server conencted on port ${port}`));
