const { read, write } = require("../model/model");
const { resolve } = require("path");

const news = {
  CREATENEWS: async (req, res) => {
    const data = read("news");
    try {
      const {
        meating_date,
        meating_time,
        set_the_direction,
        internal_route,
        enter_link,
        event_type,
        legal_name,
        name,
        profession,
        phone_number,
        additional_telephone_number,
        description,
        subject_text,
      } = await req.body;
      const { image } = await req.files;
      const filepath = Date.now() + image.name.replace(/\s/g, "");
      const newNews = {
        news_id: data.at(-1).news_id + 1 || 1,
        meating_date,
        meating_time,
        set_the_direction,
        internal_route,
        enter_link,
        event_type,
        legal_name,
        name,
        profession,
        phone_number,
        additional_telephone_number,
        description,
        image: filepath,
        subject_text,
        created_at: Date.now(),
        check_post: false,
      };

      image.mv(resolve("uploads", filepath));

      data.push(newNews);
      write("news", data);
      res
        .status(201)
        .json({ status: 201, message: "succes created", data: newNews });
    } catch (error) {
      res.status(400).json({ status: 400, message: error.message });
    }
  },
  SINGLENEWS: async (req, res) => {
    const { news_id } = await req.params;
    const data = read("activenews");
    const singleNews = data.find((data) => data.news_id == news_id);

    res.status(200).json({ status: 200, news: singleNews });
  },
  // pagination
  PAGINATION: async (req, res) => {
    let { page } = await req.query;
    const data = read("activenews");

    try {
      page = page || process.DEFAULT.pagination.page;
      const arr = data.slice((page - 1) * 9, page * 9);
      res.status(200).json({ status: 200, news: arr });
    } catch (error) {
      res.status(400).json({ status: 400, message: error.message });
    }
  },
  ALLNEWS: (req, res) => {
    const data = read("activenews");
    res.status(200).json({ status: 200, news: data });
  },
};

module.exports = news;
