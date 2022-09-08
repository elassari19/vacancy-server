"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _services = _interopRequireDefault(require("../services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (collectiom, schema) => async (req, res, next) => {
  // console.log("handle data", req.body);
  if (req.method == "PUT" && req.query.id) {
    try {
      const data = await _services.default.findOne(collectiom, schema, {
        _id: req.query.id
      }, {
        updatedAt: 0,
        createdAt: 0,
        __v: 0
      });
      req.data = _objectSpread(_objectSpread({}, data._doc), req.body);
    } catch (error) {
      res.status(409).send({
        success: false,
        message: "somthing wrong"
      });
    }
  }

  if (req.method == "POST" && req.body) {
    req.data = req.body;
  }

  console.log("is handled");
  next();
};

exports.default = _default;