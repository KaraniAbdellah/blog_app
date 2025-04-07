// Start BlogRoute
import express from "express";
import {
  createBlog,
  getUserBlogs,
  getRandomBlogs,
  deleteBlog, 
  getBlogById
} from "../controllers/BlogControllers.js";

const BlogRoute = express.Router();

BlogRoute.post("/createBlog", createBlog);
BlogRoute.get("/getUserBlogs/:id", getUserBlogs);
BlogRoute.get("/getRandomBlogs", getRandomBlogs);
BlogRoute.delete("/deleteBlog/:id", deleteBlog);
BlogRoute.get("/getBlogById/:id", getBlogById);


export default BlogRoute;
