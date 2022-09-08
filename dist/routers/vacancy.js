"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _vacancy = require("../controllers/vacancy");

var _middlewares = require("../middlewares");

var _models = require("../models");

var _validation = require("../validation");

const router = (0, _express.Router)();
router.get("/", (0, _vacancy.c_getOne)());
router.get("/all", (0, _vacancy.c_getAll)());
router.post("/create", (0, _middlewares.isAuthenticate)(), (0, _middlewares.handleData)("Vacancy", _models.vacancy), (0, _middlewares.validateData)(_validation.joiVacancy), (0, _vacancy.c_create)());
router.delete("/delete", (0, _middlewares.isAuthenticate)(), (0, _vacancy.c_delete)());
router.delete("/delete_all", (0, _vacancy.c_deleteAll)());
router.put("/update", (0, _middlewares.isAuthenticate)(), (0, _middlewares.handleData)("Vacancy", _models.vacancy), (0, _middlewares.validateData)(_validation.joiVacancy), (0, _vacancy.c_update)());
var _default = router;
exports.default = _default;