import express from "express";
import { getVideos, createVideos, deleteVideos, updateVideo } from "../controllers/videoController.js";

const router = express.Router();

router.get('/', getVideos)
router.post("/", createVideos);
router.patch("/:video_id", updateVideo);
router.delete("/:video_id", deleteVideos);

export default router;