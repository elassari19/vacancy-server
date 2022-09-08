"use strict";

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const hashString = async string => {
  try {
    const salt = await _bcrypt.default.genSalt(10);
    return await _bcrypt.default.hash(string, salt);
  } catch (error) {
    console.log(error);
  }
};

const compareString = async (string, compare) => {
  if (!string || !compare) return false;
  return await _bcrypt.default.compare(string, compare);
};

module.exports = {
  hashString,
  compareString
};