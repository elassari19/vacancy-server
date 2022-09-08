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
    // check if the vacancie exist
    req.vacancy = await _services.default.findOne("Vacancy", _models.vacancy, {
      _id: req.query.id
    }, {
      title: 1
    });

    if (req.vacancy?._id) {
      req.vacancy = await _services.default.findOneAndUpdate("Vacancy", _models.vacancy, {
        _id: req.query.id
      }, req.body);
      res.status(200).send({
        success: true,
        message: "successfully update vacancie ",
        vacancy: req.vacancy
      });
    } else {
      res.status(203).send({
        success: false,
        message: "update field somthing wrong",
        vacancy: req.vacancy
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.default = _default;