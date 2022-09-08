"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = new _mongoose.default.Schema({
  createdBy: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "User"
  },
  profileImage: {
    public_id: String,
    secure_url: String
  },
  webUrl: String,
  name: {
    type: String,
    unique: true
  },
  email: String,
  category: String,
  description: String,
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
  social: {
    linkedin: String,
    facebook: String,
    tweeter: String,
    github: String,
    instagram: String
  },
  phone: Number,
  timeline: String,
  benfits: {
    events: Boolean,
    insurance: Boolean,
    bonus: Boolean,
    review: Boolean,
    discount: Boolean,
    schedule: Boolean
  }
}, {
  timestamps: true
}); // export default mongoose.model('Company', company)


exports.default = _default;