"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../models");

var _services = _interopRequireDefault(require("../services"));

var _token = require("../utils/token");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => async (req, res, next) => {
  // console.log(req.body.cookies);
  if (!req.body.cookies) {
    res.status(401).send("UnAuthoriwed");
  } else {
    const {
      user_id
    } = (0, _token.verifyToken)(req.body.cookies); // console.log(user_id);

    try {
      req.user = await _services.default.findOne("User", _models.User, {
        _id: user_id
      }, {
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
        passwor: 0
      });

      if (req.user?._id) {
        next();
      } else {
        res.status(203).send({
          success: false,
          message: "UnAuthoriwed",
          error: req.user
        });
      }
    } catch (error) {
      res.status(401).send("not authorized");
    }
  }
};

exports.default = _default;