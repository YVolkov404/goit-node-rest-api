const httpStatus = require("../../helpers/httpStatus");
const { User } = require("../../models/index");

const logout = async (req, res, next) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({ message: httpStatus(200) });
};

module.exports = logout;
