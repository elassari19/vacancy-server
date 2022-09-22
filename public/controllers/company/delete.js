"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _company = _interopRequireDefault(require("../../models/company"));

var _services = _interopRequireDefault(require("../../services"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => async (req, res) => {
  try {
    req.company = await _services.default.findById('Company', _company.default, {
      _id: req.query.id
    });

    if (req.company?._id) {
      if (req.company.createdBy != req.user._id) {
        return res.status(400).send('delete company field');
      }

      await _services.default.deleteOne('Company', _company.default, {
        _id: req.query.id
      });
      (0, _utils.cloudinaryDeleteFiles)(req.company._id);
      res.status(200).send('the company is deleted');
    } else {
      res.status(400).send('company dosn´t exist');
    }
  } catch (error) {
    console.log(error);
    res.status(403).send('operation field');
  }
};

exports.default = _default;