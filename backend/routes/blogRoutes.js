import express from "express";
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from "../controllers/blogController.js";

const router = express.Router();

router.get('/', getBlogs)
router.get("/:id", getBlog);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

const blogRoutes = router;

export default blogRoutes;