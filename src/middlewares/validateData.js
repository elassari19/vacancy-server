export default (joiSchema) => (req, res, next) => {
  // validate req data
  const { error, value } = joiSchema.validate(req.data);
  // console.log("validate", value);
  if (error) {
    console.log("error", error.details[0]);
    res.status(203).send({
      success: false,
      message: "The data not valid",
      error: error.details[0],
    });
  } else {
    req.value = value;
    console.log("is valid");
    next();
  }
};
