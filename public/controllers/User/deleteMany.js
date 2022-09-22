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
    await _services.default.deleteMany('User', _models.User);
    res.send('all users deleted');
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.default = _default;