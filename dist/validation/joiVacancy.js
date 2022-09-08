"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _joi.default.object({
  _id: _joi.default.object(),
  createdBy: _joi.default.any(),
  avatar: {
    public_id: _joi.default.string().required(),
    secure_url: _joi.default.string().required()
  },
  webUrl: _joi.default.string(),
  // title: Joi.string().required(),
  vacancy: _joi.default.string().required().valid(..._constants.categoryVacancy),
  // Responsibilities: Joi.array().items(Joi.string()).required(),
  // Requirements: Joi.array().items(Joi.string()).required(),
  // Project_decription: Joi.array().items(Joi.string()).required(),
  skills: _joi.default.array().items(_joi.default.string()).required(),
  description: _joi.default.string(),
  salary: {
    delay: _joi.default.string().required(),
    from: _joi.default.number().required(),
    to: _joi.default.number().required()
  },
  options: {
    "Full employment": _joi.default.boolean(),
    Underemployment: _joi.default.boolean(),
    "Without experience": _joi.default.boolean(),
    "Project work": _joi.default.boolean()
  } // address: {
  //   country: Joi.string(),
  //   city: Joi.string(),
  //   street: Joi.string(),
  //   zip: Joi.string(),
  //   geo: {
  //     lon: Joi.number(),
  //     lat: Joi.number()
  //   }
  // },
  // phone: Joi.number(),
  // cv: Joi.array().items(Joi.object().keys({
  //   public_id: Joi.string(),
  //   secure_url: Joi.string(),
  //   _id: Joi.object()
  // })),
  // messages: Joi.array().items(Joi.object().keys({
  //   createdBy: Joi.object(),
  //   title: Joi.string(),
  //   body: Joi.string()
  // }))

});

exports.default = _default;