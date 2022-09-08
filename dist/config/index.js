"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "cloudinary", {
  enumerable: true,
  get: function () {
    return _config.default;
  }
});
Object.defineProperty(exports, "mongoDB", {
  enumerable: true,
  get: function () {
    return _mongoDB.default;
  }
});

var _mongoDB = _interopRequireDefault(require("./mongoDB"));

var _config = _interopRequireDefault(require("./config.cloud"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }