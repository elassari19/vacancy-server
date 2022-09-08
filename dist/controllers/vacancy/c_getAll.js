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
    const vacancies = await _services.default.findMany("Vacancy", _models.vacancy);
    res.status(200).send({
      success: true,
      vacancy: vacancies.length > 0 ? vacancies : null,
      message: vacancies.length > 0 ? "get vacancies successfuly" : "no vacancy exist"
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: error
    });
  }
};

exports.default = _default;