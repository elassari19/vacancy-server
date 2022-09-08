"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cloudinary = require("cloudinary");

var _default = arrayOfIds => {
  _cloudinary.v2.api.delete_resources(arrayOfIds, function (error, result) {
    console.log("resault", result?.deleted_counts, "error", error);
  });
};

exports.default = _default;