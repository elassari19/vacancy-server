"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _joi.default.object({
  _id: _joi.default.object(),
  profileImage: _joi.default.any(),
  webUrl: _joi.default.string(),
  name: _joi.default.string().required(),
  email: _joi.default.string().required(),
  createdBy: _joi.default.object(),
  category: _joi.default.string(),
  description: _joi.default.string(),
  address: {
    country: _joi.default.string(),
    city: _joi.default.string(),
    street: _joi.default.string(),
    zip: _joi.default.string(),
    geo: {
      lon: _joi.default.number(),
      lat: _joi.default.number()
    }
  },
  social: {
    linkedin: _joi.default.string(),
    facebook: _joi.default.string(),
    tweeter: _joi.default.string(),
    github: _joi.default.string(),
    instagram: _joi.default.string()
  },
  telegram: _joi.default.string(),
  phone: _joi.default.number(),
  timeline: _joi.default.string(),
  benfits: {
    events: _joi.default.boolean(),
    insurance: _joi.default.boolean(),
    bonus: _joi.default.boolean(),
    review: _joi.default.boolean(),
    discount: _joi.default.boolean(),
    schedule: _joi.default.boolean()
  }
});

exports.default = _default;