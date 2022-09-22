"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Joi = _interopRequireDefault(require("Joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Joi.default.object({
  email: _Joi.default.string().email().required(),
  password: _Joi.default.string().min(4).max(128).required()
});

exports.default = _default;