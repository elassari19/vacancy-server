"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _models = require("../../models");

var _services = _interopRequireDefault(require("../../services"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = () => async (req, res) => {
  const {
    email,
    password
  } = req.value;
  req.user = await _services.default.findOne("User", _models.User, {
    email
  });

  if (req.user?._id) {
    res.status(203).send({
      success: false,
      message: "User Email Already Exists!"
    });
  } else {
    req.value = await _objectSpread(_objectSpread({}, req.value), {}, {
      confirmation: await (0, _utils.hashString)(email),
      // hashed email for confirmatioon
      password: await (0, _utils.hashString)(password) // hashed password

    });

    try {
      req.user = await _services.default.createOne("User", _models.User, req.value); // create new user

      if (req.user._id) {
        emailProps = {
          to: req.user.email,
          subject: "verify your email",
          text: "please don't replay this email ",
          html: `<h1>Email Confirmation</h1>
          <div>
          <h2>Hello ${req.user.firstname} ${req.user.lastname}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href="http://${process.env.API_URL}/confirm?id=${req.user._id}&confirm=${req.user.confirmation}" >CLICK TO VIREFY EAMIL </a>
          </div>`
        };
      }

      const handleEmail = async props => {
        console.log("start sending email");
        const isSent = await (0, _utils.sendEmail)(props); // send code verfication via email

        isSent && console.log(isSent); // sent success

        !isSent && handleEmail(props);
      };

      handleEmail(emailProps);
      res.status(201).send({
        success: true,
        message: req.user._id
      });
    } catch (error) {
      // issue
      console.log(error);
      res.status(500).send({
        success: false,
        message: error.message
      });
    }
  }
};

exports.default = _default;