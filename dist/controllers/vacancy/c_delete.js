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
    const vacancies = await _services.default.findOne("Vacancy", _models.vacancy, {
      _id: req.query.id
    }, {
      cv: 1,
      _id: 0
    }); // set the public_id in array

    const image_ids = (0, _utils.destructImageId)(vacancies); // check if user own this vacancy

    if (vacancies.createdBy == req.user.id) {
      // delete vacancy by id
      await _services.default.deleteMany("Vacancy", _models.vacancy, {
        _id: req.query.id
      }); // delete files of vacancy from cloudinary

      (0, _utils.cloudinaryDeleteFiles)(image_ids);
      res.status(200).send({
        success: true,
        message: "successfully deleted vacancies" + req.query.id
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