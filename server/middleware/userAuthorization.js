const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuthorization = async (req, res, next) => {
  // verify authorization
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required." });
  }

  // token
  const token = authorization.split(" ")[1];

  try {
    // get id from token
    const { _id } = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    // pass user with id after authorization
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    res.status(401).json({ error: "Request is not authorized." });
  }
};

module.exports = userAuthorization;
