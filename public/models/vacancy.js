"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _mongoose.default.Schema({
  createdBy: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "User"
  },
  avatar: {
    public_id: String,
    secure_url: String
  },
  webUrl: String,
  title: {
    type: String
  },
  vacancy: {
    type: String,
    enum: _constants.categoryVacancy
  },
  Responsibilities: {
    type: [String],
    required: true
  },
  Requirements: {
    type: [String],
    required: true
  },
  sub_description: String,
  Project_decription: {
    type: [String],
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  salary: {
    delay: String,
    from: Number,
    to: Number
  },
  "additional options": {
    "Full employment": Boolean,
    Underemployment: Boolean,
    "Without experience": Boolean,
    "Project work": Boolean
  },
  address: {
    country: String,
    city: String,
    street: String,
    zip: String,
    geo: {
      lon: Number,
      lat: Number
    }
  },
  phone: Number,
  cv: [{
    public_id: String,
    secure_url: String,
    createdBy: {
      type: _mongoose.default.Schema.Types.ObjectId,
      ref: "User"
    },
    title: String,
    disc: String,
    public_id: String,
    secure_url: String
  }],
  messages: [{
    title: String,
    content: String,
    createdBy: {
      type: _mongoose.default.Schema.Types.ObjectId,
      ref: "User"
    },
    title: String,
    body: String
  }]
}, {
  timestamps: true
});

exports.default = _default;