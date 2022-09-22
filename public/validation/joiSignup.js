"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Joi = _interopRequireDefault(require("Joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Joi.default.object({
  _id: _Joi.default.any(),
  firstname: _Joi.default.string().min(3).max(20).required(),
  lastname: _Joi.default.string().min(3).max(20).required(),
  email: _Joi.default.string().email().required(),
  password: _Joi.default.string().min(4).max(200).required(),
  confirmPassword: _Joi.default.any().valid(_Joi.default.ref("password")).required(),
  privacy: _Joi.default.string().valid("checked"),
  phone: _Joi.default.string().min(4).max(128),
  gender: _Joi.default.string(),
  profile: {
    avatar: {
      public_id: _Joi.default.string(),
      secure_url: _Joi.default.string()
    },
    title: _Joi.default.string(),
    description: _Joi.default.string().min(50).max(300),
    Underemployment: _Joi.default.boolean()
  },
  about: _Joi.default.array().items(_Joi.default.string()),
  skill: _Joi.default.array().items(_Joi.default.string()),
  crypto: _Joi.default.boolean(),
  company: _Joi.default.array().items(_Joi.default.string()),
  education: _Joi.default.array().items(_Joi.default.string()),
  experience: _Joi.default.array().items(_Joi.default.string()),
  birthday: _Joi.default.string(),
  timeline: _Joi.default.string(),
  empolyeType: _Joi.default.string(),
  social: {
    linkedin: _Joi.default.string(),
    facebook: _Joi.default.string(),
    tweeter: _Joi.default.string(),
    github: _Joi.default.string(),
    instagram: _Joi.default.string()
  },
  pay: {
    hour: _Joi.default.number(),
    distance: _Joi.default.number(),
    day: _Joi.default.number()
  },
  address: {
    country: _Joi.default.string(),
    city: _Joi.default.string(),
    street: _Joi.default.string(),
    zip: _Joi.default.string(),
    geo: {
      lon: _Joi.default.number(),
      lat: _Joi.default.number()
    }
  },
  status: _Joi.default.string().default("Pending"),
  permission: _Joi.default.string().valid("Employer", "Applicant"),
  confirmation: _Joi.default.string()
});

exports.default = _default;