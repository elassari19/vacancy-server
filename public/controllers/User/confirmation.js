"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../models");

var _services = _interopRequireDefault(require("../../services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => async (req, res) => {
  const {
    confirm,
    id
  } = req.query; // select user and get code of confirmaion

  req.user = await _services.default.findOne("User", _models.User, {
    _id: id
  }, {
    confirmation: 1,
    status: 1
  });
  if (!req.user) return res.status(203).send({
    success: false,
    message: "Account not exist"
  });
  if (req.user?.status == "Active") return res.status(203).send({
    success: false,
    message: "Acount already activated"
  });
  if (req.user?.status != "Pending") return res.status(400).send({
    success: false,
    message: "somthing wrond"
  });
  const valid = (await req.user.confirmation) == confirm;

  if (valid) {
    try {
      req.user = await _services.default.findOneAndUpdate("User", _models.User, {
        _id: id
      }, {
        status: "Active",
        confirmation: ""
      });
      res.status(200).send({
        success: true,
        message: "account actived"
      });
    } catch (error) {
      res.status().send({
        success: false,
        message: error
      });
    }
  } else {
    res.send({
      success: true,
      message: "code not valid or somthing wrong"
    });
  }
};

exports.default = _default;