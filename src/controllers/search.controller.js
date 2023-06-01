const { read } = require("../model/model");

const search = {
  SEARCHBYNAME: (req, res) => {
    const data = read("activenews");
    let { name } = req.query;
    const dataFilter = data.filter((data) => data.name == name);
    res.status(200).json({ status: 200, news: dataFilter });
  },
  //by type
  SEARCHBYTYPE: (req, res) => {
    const data = read("activenews");
    let { type } = req.query;
    const dataFilter = data.filter((data) => data.event_type == type);
    res.status(200).json({ status: 200, news: dataFilter });
  },
  //by date
  SEARCHBYDATE: (req, res) => {
    const data = read("activenews");
    let { date } = req.query;
    const dataFilter = data.filter((data) => data.meating_date == date);
    res.status(200).json({ status: 200, news: dataFilter });
  },
  //by category
  SEARCHBYCATEGORY: (req, res) => {
    const data = read("activenews");
    let { category } = req.query;
    const dataFilter = data.filter(
      (data) => data.set_the_direction == category
    );
    res.status(200).json({ status: 200, news: dataFilter });
  },
};

module.exports = search;
