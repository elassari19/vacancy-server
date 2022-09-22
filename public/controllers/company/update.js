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
    // update data
    const companies = await _services.default.findOneAndUpdate('Company', _company.default, {
      _id: req.query.id
    }, req.body);
    res.status(200).send(companies);
  } catch (error) {
    res.status(200).send(error);
  }
};

exports.default = _default;