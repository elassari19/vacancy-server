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
    const resault = await _services.default.deleteOne("User", _models.User, {
      _id: req.body.id
    });

    if (resault.deletedCount == 1) {
      res.clearCookie("token");
      res.send("user successfuly deleted");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.default = _default;