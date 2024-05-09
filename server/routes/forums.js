import express from "express";
import { getForums } from "../controllers/forums.js";

const router = express.Router();

/* READ */
router.get("/", getForums);

export default router;