import expressAsyncHandler from "express-async-handler";
import Blog from "../models/blogModel.js";

const getBlog = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const video = await Blog.findById(id);
  return res.json(video);
});

const getBlogs = expressAsyncHandler(async (req, res) => {
  const blog = await Blog.find();
  return res.json(blog);
});

const createBlog = expressAsyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const blog = await Blog.create({ name, description });
  // fuck place, i write {new: true}
  // that give me a lot of fucking ploblem and that waste my time a lot.
  return res.status(200).json(blog);
});

const updateBlog = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  // return console.log(id)
  const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
  return res.json(updatedBlog);
});

const deleteBlog = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedBlog = await Blog.findByIdAndDelete(id);
  return res.json(deletedBlog);
});

export { getBlog, getBlogs, createBlog, updateBlog, deleteBlog };
