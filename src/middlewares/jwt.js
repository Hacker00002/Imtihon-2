const jwt = require("jsonwebtoken");

// secret key
const SECRET_KEY = "hacker";
// check admin
const checkTokenAdmin = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      throw new Error("Token required");
    }
    const { agent } = jwt.verify(token, SECRET_KEY);
    // if (req.headers["user-agent"] != agent) {
    //   throw new Error(
    //     "This device cannot send a request. Only one device can send a request"
    //   );
    // }
    next();
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};

module.exports = checkTokenAdmin;
