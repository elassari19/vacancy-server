"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../models");

var _services = _interopRequireDefault(require("../../services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => async (req, res) => {
  if (req.query.password) {
    req.query.password = await hashString(req.query.password);
  }

  try {
    req.user = await _services.default.findOneAndUpdate('User', _models.User, {
      _id: req.user._id
    }, req.body);
    res.status(201).send('success update data');
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.default = _default;