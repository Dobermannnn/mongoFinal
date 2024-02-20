const controller = require("../controllers/comments");
const router = require("express").Router();
const cacheNoStore = require("../middlewares/cacheNoStore");

router.get("/:postId", cacheNoStore, controller.getCommentByPostId);
router.delete("/:commentId", cacheNoStore, controller.deleteComment);
router.post("/", cacheNoStore, controller.createComment);

module.exports = router;
