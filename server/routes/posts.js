import express from "express";
import { getFeedPosts, getUserPosts, likePost} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts); // gets literally every single post there is in DB
router.get("/:userId/posts", verifyToken, getUserPosts); 

/* READ */
router.patch("/:id/like", verifyToken, likePost);

export default router;