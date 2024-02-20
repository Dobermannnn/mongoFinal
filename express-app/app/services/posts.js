const Post = require("../models/post");

module.exports = {
  getAllPosts: async () => {
    const allPost = await Post.aggregate(
      [
        {
          $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "postId",
            as: "comments",
          },
        },
        {
          $addFields: {
            firstComment: { $first: "$comments" },
            totalComments: { $size: "$comments" },
          },
        },
      ],
      { maxTimeMS: 60000, allowDiskUse: true }
    );

    return allPost.map((p) => ({
      id: p._id,
      creatorId: p.creatorId,
      topic: p.topic,
      content: p.content,
      creatorName: p.creatorName,
      createdAt: p.createdAt,
      firstComment: p.firstComment,
      totalComments: p.totalComments,
    }));
  },
  createPost: async (creatorId, creatorName, topic, content) => {
    const newpPost = new Post({
      creatorId: creatorId,
      topic: topic,
      content: content,
      creatorName: creatorName,
    });
    return newpPost.save();
  },
  getPostById: async (id) => {
    const post = await Post.find({ _id: id });
    return post;
  },
  deletePostById: async (id) => {
    return Post.deleteOne({ _id: id });
  },
  getPostsByUser: async (user) => {
    const posts = await Post.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "creatorId",
          foreignField: "_id",
          as: "result",
        },
      },
      {
        $unwind: {
          path: "$result",
          preserveNullAndEmptyArrays: false,
        },
      },
      {
        $match: {
          "result.name": {
            $regex: ".*" + user + ".*",
            $options: "i",
          },
        },
      },
      {
        $lookup: {
          from: "comments",
          localField: "_id",
          foreignField: "postId",
          as: "comments",
        },
      },
      {
        $addFields: {
          firstComment: { $first: "$comments" },
          totalComments: { $size: "$comments" },
        },
      },
    ]);

    return posts.map((p) => ({
      id: p._id,
      creatorId: p.creatorId,
      topic: p.topic,
      content: p.content,
      creatorName: p.creatorName,
      createdAt: p.createdAt,
      firstComment: p.firstComment,
      totalComments: p.totalComments,
    }));
  },

  getPostsByTopic: async (topic) => {
    const allPost = await Post.aggregate(
      [
        {
          $match: {
            topic: topic,
          },
        },
        {
          $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "postId",
            as: "comments",
          },
        },
        {
          $addFields: {
            firstComment: { $first: "$comments" },
            totalComments: { $size: "$comments" },
          },
        },
      ],
      { maxTimeMS: 60000, allowDiskUse: true }
    );

    return allPost.map((p) => ({
      id: p._id,
      creatorId: p.creatorId,
      topic: p.topic,
      content: p.content,
      creatorName: p.creatorName,
      createdAt: p.createdAt,
      firstComment: p.firstComment,
      totalComments: p.totalComments,
    }));
  },
};
