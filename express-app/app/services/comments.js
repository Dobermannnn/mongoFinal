const Comment = require("../models/comment");

module.exports = {
  getCommentsOfPost: async (postId) => {
    const allComments = await Comment.find({ postId: postId });
    if (allComments == []) {
      console.log("here");
    }

    return allComments.map((p) => ({
      creatorId: p.creatorId,
      creatorName: p.creatorName,
      content: p.content,
      createdAt: p.createdAt,
    }));
  },
  deleteComment: async (commentId) => {
    return Comment.deleteOne({ _id: commentId });
  },
  createComment: async (creatorId, creatorName, postId, content) => {
    const newComment = new Comment({
      creatorId: creatorId,
      creatorName: creatorName,
      postId: postId,
      content: content,
    });
    return newComment.save();
  },
};
