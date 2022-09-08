"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _User = require("../controllers/User");

var _middlewares = require("../middlewares");

var _models = require("../models");

var _validation = require("../validation");

const router = (0, _express.Router)();
router.post("/update", (0, _middlewares.isAuthenticate)(), (0, _middlewares.handleData)("User", _models.User), (0, _middlewares.validateData)(_validation.joiSignin), (0, _User.c_update)());
router.post("/upload", (0, _middlewares.isAuthenticate)(), (0, _middlewares.uploadFiles)(), (0, _middlewares.handleData)("User", _models.User), (0, _middlewares.validateData)(_validation.joiSignin), (0, _User.c_avatar)());
router.get("/signout", (0, _User.c_signout)());
router.post("/signin", (0, _middlewares.handleData)("User", _models.User), (0, _middlewares.validateData)(_validation.joiSignin), (0, _User.c_signin)());
router.post("/signup", (0, _middlewares.handleData)("User", _models.User), (0, _middlewares.validateData)(_validation.joiSignup), (0, _User.c_signup)());
router.post("/resend", (0, _User.c_resend)());
router.delete("/delete", (0, _middlewares.isAuthenticate)(), (0, _User.c_delete)());
router.delete("/deleteAll", (0, _middlewares.isAuthenticate)(), (0, _User.c_deleteMany)());
router.get("/confirmation", (0, _User.c_confirmation)());
router.get("/user", (0, _User.c_getOne)());
router.get("/users", (0, _User.c_getMany)());
router.post("/forgot", (0, _User.c_forgot)());
router.get("/resetPssword", (0, _User.c_resetPassword)());
var _default = router;
exports.default = _default;