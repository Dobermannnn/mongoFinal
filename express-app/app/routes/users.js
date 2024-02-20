const controller = require("../controllers/users");
const router = require("express").Router();
const cacheNoStore = require("../middlewares/cacheNoStore");

router.get("/", cacheNoStore, controller.listUsers);
router.get("/:id", cacheNoStore, controller.getUser);
router.get("/userName/:name", cacheNoStore, controller.getUserByName);
router.post("/", cacheNoStore, controller.createUser);
router.post("/Login", cacheNoStore, controller.Login);

module.exports = router;
