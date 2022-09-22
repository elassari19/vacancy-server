"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _company = _interopRequireDefault(require("../../models/company"));

var _services = _interopRequireDefault(require("../../services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => async (req, res) => {
  try {
    const companies = await _services.default.findMany('Company', _company.default);
    res.status(200).send(companies);
  } catch (error) {
    res.status(200).send(error);
  }
};

exports.default = _default;