"use strict";

var _cloudinary = require("cloudinary");

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _routers = _interopRequireDefault(require("./routers"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _config = require("./config");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dotenv library
require("dotenv").config(); // cloudinary config


_cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
  secure: true
});

const port = process.env.PORT || 5000;
const app = (0, _express.default)(); // connect database 'mongoDB'

(0, _config.mongoDB)();
app.use((0, _cors.default)());
app.use(_express.default.json()); //app.use(express.urlencoded());

app.use((0, _cookieParser.default)());
app.use((0, _expressSession.default)({
  secret: process.env.JWT_SECRET,
  resave: false,
  saveUninitialized: false
})); // signin & signup routes

app.use("/api/v1", _routers.default); // home route

app.get("/api/v1", (req, res) => {
  try {
    res.send("home route is working");
  } catch (error) {
    console.log(error.message);
  }
}); // run server

app.listen(port, console.log(`server conencted on port ${port}`));