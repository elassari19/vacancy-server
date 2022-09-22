"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../models");

var _services = _interopRequireDefault(require("../../services"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = () => async (req, res) => {
  const {
    confirmPassword,
    password,
    email
  } = req.value;
  req.user = await _services.default.findOne('User', _models.User, {
    email
  });

  if (req.user?._id) {
    res.status(400).send(' user already exist');
  } else {
    if (password == confirmPassword) {
      password = await (0, _utils.hashString)(password);
    }

    try {
      req.user = await _services.default.findOneAndUpdate('User', _models.User, {
        password
      }); // create new user

      if (req.user._id) {
        emailProps = {
          to: req.user.email,
          subject: "create new password",
          text: "please don't replay this email ",
          html: `<h1>Success create new password</h1>
          <div>
          <h2>Hello ${req.user.firstname} ${req.user.lastname}</h2>
          <p>email: ${req.user.email}</p>
          <p>password: ${confirmPassword}</p>
          </div>`
        };
        const isSent = sendEmail(emailProps); // send code verfication via email

        isSent && console.log(isSent); // sent success
      }

      res.status(201).send(req.user);
    } catch (error) {
      // issue
      console.log(error);
      res.status(400).send(error);
    }
  }
};

exports.default = _default;