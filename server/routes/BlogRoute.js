// Start BlogRoute
import express from "express";
import {
  createBlog,
  getUserBlogs,
  getRandomBlogs,
  deleteBlog,
  editBlog,
  getBlogById,
  addLike,
  addComment,
  getBlogByCategory,
  getBlogsBySearch
} from "../controllers/BlogControllers.js";

const BlogRoute = express.Router();

BlogRoute.post("/createBlog", createBlog);
BlogRoute.get("/getUserBlogs/:id", getUserBlogs);
BlogRoute.get("/getRandomBlogs", getRandomBlogs);
BlogRoute.delete("/deleteBlog/:id", deleteBlog);
BlogRoute.put("/editBlog/:id", editBlog);
BlogRoute.get("/getBlogById/:id", getBlogById);
BlogRoute.get("/addLike/:id", addLike);
BlogRoute.post("/addComment/:id", addComment);
BlogRoute.get("/getBlogByCategory/:category", getBlogByCategory);
BlogRoute.get("/getBlogsBySearch/:searched", getBlogsBySearch);


export default BlogRoute;
