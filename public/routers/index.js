"use strict";

var _express = require("express");

var _vacancy = _interopRequireDefault(require("./vacancy"));

var _user = _interopRequireDefault(require("./user"));

var _company = _interopRequireDefault(require("./company"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)();
router.use("/vacancy", _vacancy.default);
router.use("/company", _company.default);
router.use("/", _user.default);
module.exports = router;