const express = require("express");
const expressfileupload = require("express-fileupload");
// export routes
const swaggerRouter = require("./swagger");
const newsRouter = require("./routes/news.router");
const adminRouter = require("./routes/admin.router");
const searchNameRouter = require("./routes/search.router");
// create app
const app = express();

app.use(express.json());
app.use(expressfileupload());
// routes
app.use(newsRouter);
app.use(adminRouter);
app.use(searchNameRouter);
app.use("/api-docs", swaggerRouter);

// create server
app.listen(5000, () => console.log("Server running"));
