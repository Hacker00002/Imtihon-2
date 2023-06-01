const { Router } = require("express");
const validate = require("../middlewares/validate");
const checkTokenAdmin = require("../middlewares/jwt");
const admin = require("../controllers/admin.controller");

const router = Router();
// router admin
router.post("/admin", checkTokenAdmin, validate, admin.LOGINADMIN);
router.post("/admin/check-posts/:news_id", checkTokenAdmin, admin.CHECKPOST);
// exports
module.exports = router;
