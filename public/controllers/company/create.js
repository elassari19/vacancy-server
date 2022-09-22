"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _company = _interopRequireDefault(require("../../models/company"));

var _services = _interopRequireDefault(require("../../services"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = () => async (req, res) => {
  // console.log("newCompany", req.value);
  try {
    req.oldCompany = await _services.default.findOne("Company", _company.default, {
      $or: [{
        name: req.value.name
      }, {
        email: req.value.email
      }]
    }, {});

    if (req.oldCompany?.profileImage?.public_id && req.value.profileImage.public_id && req.oldCompany?.profileImage?.public_id != req.value.profileImage.public_id) {
      (0, _utils.cloudinaryDeleteFiles)([req.oldCompany.profileImage.public_id]);
      req.company = await _services.default.findOneAndUpdate("Company", _company.default, {
        $or: [{
          name: req.value.name
        }, {
          email: req.value.email
        }]
      }, req.value);

      if (req.company?._id) {
        return res.status(200).send({
          success: true,
          message: "company details updated",
          company: req.company
        });
      }
    }

    await _services.default.createOne("Company", _company.default, _objectSpread(_objectSpread({}, req.value), {}, {
      createdBy: req.user._id
    }));
    res.status(200).send({
      success: true,
      message: "company created",
      company: req.company
    });
  } catch (error) {
    console.log(error);
    res.status(203).send({
      success: false,
      message: error
    });
  }
};

exports.default = _default;