const express = require("express");
const expressLayout = require("express-ejs-layouts");
const indexRouter = require(__dirname + "/routers/index.js");
const mongoose = require("mongoose");
if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
const app = express();
app.use(expressLayout);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layout/layout");
app.use("/", indexRouter);
mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.once("open", () => console.log("connection opened"));
mongoose.connection.on("error", (error) => console.log(error));
app.listen(process.env.PORT || 3000);
