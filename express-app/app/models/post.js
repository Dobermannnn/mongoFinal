const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const Comment = require("../models/comment");
const postSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: "User" },
  creatorName: String,
  topic: String,
  content: String,

  createdAt: { type: Date, default: Date.now },
});

const Post = model("Post", postSchema);
module.exports = Post;
