const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/post");
const commentsRouter = require("./routes/comment");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/user", usersRouter);
app.use("/api/post", postsRouter);
app.use("/api/comment", commentsRouter);
module.exports = app;
