const {
  getCommentsOfPost,
  createComment,
  deleteComment,
} = require("../services/comments");

module.exports = {
  getCommentByPostId: async (req, res) => {
    try {
      const postId = req.params.postId;
      const comments = await getCommentsOfPost(postId);
      res.json(comments);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      const commentId = req.params.commentId;
      const comment = await deleteComment(commentId);
      res.json(comment);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  createComment: async (req, res) => {
    try {
      const { content, creatorName, postId, creatorId } = req.body;
      const comment = await createComment(
        creatorId,
        creatorName,
        postId,
        content
      );
      console.log(comment);
      res.json(comment);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
