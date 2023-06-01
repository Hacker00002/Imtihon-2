const { Router } = require("express");
const validate = require("../middlewares/validate");
// routes
const news = require("../controllers/news.controller");

const router = Router();
// route news
router.get("/news", news.PAGINATION);
router.get("/all/news", news.ALLNEWS);
router.get("/news/:news_id", news.SINGLENEWS);
router.post("/news/create-news", validate, news.CREATENEWS);

module.exports = router;
