const {
  getAllPosts,
  createPost,
  getPostById,
  getPostsByUser,
  getPostsByTopic,
  deletePostById,
} = require("../services/posts");

module.exports = {
  getAllPosts: async (req, res) => {
    try {
      const posts = await getAllPosts();
      console.log(posts);
      res.json(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  createPost: async (req, res) => {
    try {
      const { creatorId, topic, creatorName, content } = req.body;
      const post = await createPost(creatorId, creatorName, topic, content);
      res.json(post);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getPostById: async (req, res) => {
    try {
      const id = req.params.id;
      const post = await getPostById(id);
      res.json(post);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      const id = req.params.id;
      const deletePost = await deletePostById(id);
      res.json(deletePost);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getPostsByUser: async (req, res) => {
    try {
      const user = req.params.User;
      const posts = await getPostsByUser(user);
      res.json(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getPostsByTopic: async (req, res) => {
    try {
      const topic = req.params.Topic;
      const posts = await getPostsByTopic(topic);
      console.log(posts);
      res.json(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
