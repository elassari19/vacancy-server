"use strict";

var _config = _interopRequireWildcard(require("./config"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _routers = _interopRequireDefault(require("./routers"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

app.use("/", _express.default.static(resolve(__dirname, "../dist"))); // dotenv library

require("dotenv").config(); // cloudinary config


(0, _config.default)();
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
}); // home route

app.get("/", (req, res) => {
  try {
    res.send("home route is working");
  } catch (error) {
    console.log(error.message);
  }
}); // run server

app.listen(port, console.log(`server conencted on port ${port}`));