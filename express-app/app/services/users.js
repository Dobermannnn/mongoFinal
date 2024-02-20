const User = require("../models/user");

module.exports = {
  getAllUsers: async () => {
    const allUser = await User.find({});
    return allUser.map((p) => ({
      id: p._id,
      name: p.name,
      password: p.password,
    }));
  },
  getUser: async (id) => {
    const user = await User.find({ _id: id });
    return user;
  },
  createUser: async (name, password) => {
    const user = await User.find({ name: name });
    if (user.length < 1) {
      const newUser = new User({ name, password });
      return newUser.save();
    } else {
      return null;
    }
  },
  Login: async (name2, password) => {
    const user = await User.findOne({ name: name2, password: password });
    const { name } = user;
    return user;
  },
  getUserByName: async (userName) => {
    const user = await User.findOne({ name: userName });
    const { _id } = user;
    return user;
  },
};
