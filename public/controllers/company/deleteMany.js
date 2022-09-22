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
    const companies = await _services.default.findMany('Company', _company.default, {}, {
      avatar: 1,
      createdBy: 1
    }); // destruct public_id from data

    const image_ids = companies.filter(items => items['avatar'].public_id != undefined).map(items => items['avatar'].public_id); // delete files from cloud

    (0, _utils.cloudinaryDeleteFiles)(image_ids); // delete all companies created by this user from db

    try {
      await _services.default.deleteMany('Company', _company.default, {
        createdBy: req.user.id
      });
    } catch (error) {
      res.status(400).send('somthing wrong');
    }

    res.status(200).send('all companies deleted');
  } catch (error) {
    console.log(error);
    res.status(403).send('field delete companies');
  }
};

exports.default = _default;