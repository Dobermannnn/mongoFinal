const {
  getAllUsers,
  getUser,
  createUser,
  Login,
  getUserByName,
} = require("../services/users");

module.exports = {
  listUsers: async (req, res) => {
    try {
      const Users = await getAllUsers();
      res.json(Users);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  getUser: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await getUser(id);
      res.json(user);
    } catch (err) {
      res.status.send(err);
    }
  },
  getUserByName: async (req, res) => {
    try {
      const userName = req.params.name;
      const userId = await getUserByName(userName);
      res.json(userId);
    } catch (err) {
      res.status.send(err);
    }
  },
  createUser: async (req, res) => {
    try {
      const { name, password } = req.body;
      //console.log("create : " + name + " " + password);
      const user = await createUser(name, password);
      res.json(user);
    } catch (err) {
      res.status.send(err);
    }
  },
  Login: async (req, res) => {
    try {
      const { name, password } = req.body;
      const user = await Login(name, password);
      res.json(user);
    } catch (err) {
      res.status.send(err);
    }
  },
};
