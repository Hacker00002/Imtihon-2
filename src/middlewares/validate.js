const { loginShema, createNewsShema } = require("../joi/validation");

module.exports = (req, res, next) => {
  try {
    if (req.url == "/admin" && req.method == "POST") {
      const { error } = loginShema.validate(req.body);
      if (error) throw Error(error);
    }
    if (req.url == "/news/create-news" && req.method == "POST") {
      const { error } = createNewsShema.validate(req.body);
      if (error) throw Error(error);
    }
    next();
  } catch (error) {
    res.status(400).json({ status: 400, message: error.message });
  }
};
