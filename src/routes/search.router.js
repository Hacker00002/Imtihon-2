const { Router } = require("express");
// route
const search = require("../controllers/search.controller");

const router = Router();
// routes
router.get("/search-by/name", search.SEARCHBYNAME);
router.get("/search-by/type", search.SEARCHBYTYPE);
router.get("/search-by/date", search.SEARCHBYDATE);
router.get("/search-by/category", search.SEARCHBYCATEGORY);

module.exports = router;
