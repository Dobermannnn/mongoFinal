const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: "User" },
  creatorName: String,
  postId: { type: Schema.Types.ObjectId, ref: "Post" },
  content: String,
  createdAt: { type: Date, default: Date.now },
});

const Comment = model("Comment", commentSchema);
module.exports = Comment;
