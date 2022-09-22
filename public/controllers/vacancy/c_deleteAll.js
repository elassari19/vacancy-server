"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../models");

var _services = _interopRequireDefault(require("../../services"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => async (req, res) => {
  try {
    const vacancies = await _services.default.findMany("Vacancy", _models.vacancy, {}, {
      cv: 1,
      _id: 0
    });

    if (vacancies) {
      const public_id = []; // combine arrays in one array

      for (let index = 0; index < vacancies.length; index++) {
        const element = vacancies[index]["cv"];
        element.length > 0 && public_id.push(...element);
      } // destruct public_id from data


      const image_ids = public_id.map(items => items.public_id);
      console.log(image_ids); // delete files from cloud

      (0, _utils.cloudinaryDeleteFiles)(image_ids); // delete files from db

      await _services.default.deleteMany("Vacancy", _models.vacancy);
      res.status(200).send({
        success: true,
        message: "successfully deleted all vacancies",
        vacancy: null
      });
    } else {
      res.status(409).send("somthing wrong");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.default = _default;