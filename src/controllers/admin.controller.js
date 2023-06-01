const jwt = require("jsonwebtoken");
const { read, createHashPassword, write } = require("../model/model");

const admin = {
  // login admin
  LOGINADMIN: async (req, res) => {
    const SECRET_KEY = "hacker";
    try {
      const data = read("admin");
      const { admin_username, admin_password } = await req.body;
      const passwordHash = createHashPassword(admin_password);
      // check admin
      const checkAdmin = data.find(
        (admin) =>
          admin.admin_username == admin_username &&
          admin.admin_password == passwordHash
      );
      if (!checkAdmin) {
        throw new Error("Wrong username or password");
      }
      // check token admin
      res.status(201).json({
        status: 201,
        message: "success",
        acces_token: jwt.sign(
          {
            admin_id: checkAdmin.admin_id,
            agent: req.headers["user-agent"],
          },
          SECRET_KEY
        ),
      });
    } catch (error) {
      res.status(400).json({ status: 400, message: error.message });
    }
  },
  // checkpost
  CHECKPOST: async (req, res) => {
    const checkdata = read("news");
    const active = read("activenews");
    try {
      const { news_id } = await req.params;
      const filterPost = checkdata.find((data) => data.news_id == news_id);
      filterPost.check_post = true;

      delete filterPost.news_id,
        (filterPost.news_id = active.at(-1)?.news_id + 1 || 1);

      const filterActive = checkdata.filter((data) => data.news_id != news_id);
      if (!filterActive) {
        throw new Error("Cennot");
      }
      write("news", filterActive);
      active.push(filterPost);
      write("activenews", active);
      res.status(201).json({ status: 201, message: "succesfully" });
    } catch (error) {
      res.status(400).json({ status: 400, message: error.message });
    }
  },
};

module.exports = admin;
