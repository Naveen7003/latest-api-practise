const express = require("express")
const app = express();
const indexRouter = require("./routes/indexroutes");

app.use("/api/v1", indexRouter);

module.exports = app