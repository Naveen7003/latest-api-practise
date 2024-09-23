const express = require("express")
const cors = require("cors")
const app = express();
const indexRouter = require("./routes/indexroutes");

app.use(cors({
    origin:true,
    credentials:true
}))
app.use("/api/v1", indexRouter);

module.exports = app