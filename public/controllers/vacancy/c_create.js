"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../models");

var _services = _interopRequireDefault(require("../../services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = () => async (req, res) => {
  const data = _objectSpread(_objectSpread({}, req.value), {}, {
    createdBy: req.user?._id
  });

  try {
    req.vacancy = await _services.default.createOne("Vacancy", _models.vacancy, _objectSpread({}, data)); // console.log("req.vacnacy", req.vacancy);

    if (req.vacancy[0]?._id) {
      res.status(200).send({
        success: true,
        message: "created success",
        vacancy: req.vacancy[0]
      });
    } else {
      res.status(203).send({
        success: false,
        message: "created vacancy filed",
        vacancy: req.vacancy.error
      });
    }
  } catch (error) {
    console.log(error);
    res.status(203).send({
      success: false,
      message: error,
      vacancy: req?.vacancy
    });
  }
};

exports.default = _default;