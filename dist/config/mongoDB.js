"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async () => {
  try {
    await _mongoose.default.connect(process.env.MONGOOSE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("db is connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

exports.default = _default;