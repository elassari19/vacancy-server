export default () => (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).send({ success: true, message: "User success signout" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
