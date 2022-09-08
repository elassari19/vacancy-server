"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _company = require("../controllers/company");

var _middlewares = require("../middlewares");

var _company2 = _interopRequireDefault(require("../models/company"));

var _joiCompany = _interopRequireDefault(require("../validation/joiCompany"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.post("/create", // isAuthenticate(),
(0, _middlewares.handleData)("Company", _company2.default), (0, _middlewares.validateData)(_joiCompany.default), (0, _middlewares.uploadFiles)(), (0, _company.c_create)());
router.delete("/delete", (0, _middlewares.isAuthenticate)(), (0, _company.c_delete)());
router.delete("/deletemany", (0, _middlewares.isAuthenticate)(), (0, _company.c_deleteMany)());
router.put("/", (0, _middlewares.isAuthenticate)(), (0, _middlewares.handleData)("Company", _company2.default), (0, _middlewares.validateData)(_joiCompany.default), (0, _company.c_update)());
router.get("/get", (0, _company.c_get)());
router.get("/", (0, _company.c_getMany)());
var _default = router;
exports.default = _default;