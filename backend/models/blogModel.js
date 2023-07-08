import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Number,
    default: 0,
  },
});

const Blog = mongoose.model('Blog', blogSchema)

export default Blog;