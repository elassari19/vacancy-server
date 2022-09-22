"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../models");

var _services = _interopRequireDefault(require("../../services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => async (req, res) => {
  try {
    req.cloudinary = await _services.default.findOneAndUpdate('User', _models.User, {
      _id: req.user._id
    }, req.query.profile.avatar);
    res.status(202).send(req.user.profile.avatar);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.default = _default;