const controller = require("../controllers/posts");
const router = require("express").Router();
const cacheNoStore = require("../middlewares/cacheNoStore");

router.get("/", cacheNoStore, controller.getAllPosts);
router.delete("/:id", cacheNoStore, controller.deletePost);
router.get("/byId/:id", cacheNoStore, controller.getPostById);
router.get("/byUser/:User", cacheNoStore, controller.getPostsByUser);
router.get("/byTopic/:Topic", cacheNoStore, controller.getPostsByTopic);
router.post("/", cacheNoStore, controller.createPost);

module.exports = router;
