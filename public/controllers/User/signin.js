"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../models");

var _services = _interopRequireDefault(require("../../services"));

var _utils = require("../../utils");

var _token = require("../../utils/token");

var _cookie = _interopRequireDefault(require("cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => async (req, res) => {
  if (!req.cookies.token) {
    const {
      email,
      password
    } = req.body;
    req.user = await _services.default.findOne("User", _models.User, {
      email: email
    }, {
      _id: 1,
      password: 1,
      status: 1,
      permission: 1
    });

    if (!req.user?._id) {
      return res.status(203).send({
        success: false,
        message: "Email account not found!"
      });
    }

    if (await (0, _utils.compareString)(password, req.user?.password)) {
      if (req.user.status != "Active") return res.status(202).send({
        success: false,
        message: "Please Active you Account"
      });
      const token = (0, _utils.createToken)(req.user.id, "30d");
      res.setHeader("Set-Cookie", _cookie.default.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 60 * 60 * 60,
        sameSite: "strict",
        path: "/"
      })).status(200).send({
        success: true,
        id: req.user._id,
        token,
        permission: req.user.permission
      });
    } else {
      return res.status(203).send({
        success: false,
        message: "Invalid Email or Password"
      });
    }
  } else {
    const {
      user_id
    } = (0, _token.verifyToken)(req.cookies.token);

    if (user_id) {
      req.user = await _services.default.findById("User", _models.User, user_id);
      res.cookie("token", (0, _utils.createToken)(user_id, "30d"));
      res.status(200).send({
        success: true,
        message: "already signed"
      });
    } else {
      res.status(500).send({
        success: false,
        message: error.message
      });
    }
  }
};

exports.default = _default;