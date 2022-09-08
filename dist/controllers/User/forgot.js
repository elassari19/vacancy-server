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
    email
  } = req.body;
  const user = await _services.default.findOne("User", _models.User, {
    email
  }, {
    email: 1
  });
  console.log(user);

  if (!user) {
    return res.status(203).send({
      success: false,
      message: "email dosn´t exist"
    });
  }

  if (user?._id) {
    emailProps = {
      to: req.user.email,
      subject: "forgot password",
      text: "please don't replay this email ",
      html: `<h1>Forgot password</h1>
      <div>
      <h2>Hello ${req.user.firstname} ${req.user.lastname}</h2>
      <p>Thank you for subscribing. Please visite following link to set new password </p>
      <a href="http://${process.env.API_URL}/password?id=${req.user._id}&confirm=${req.user.confirmation}" >CLICK TO VIREFY EAMIL </a>
      </div>`
    };
    const isSent = (0, _utils.sendEmail)(req.value); // send code verfication via email

    isSent && console.log(isSent); // sent success

    res.status(200).send({
      success: true,
      message: "new password created"
    });
  }
};

exports.default = _default;