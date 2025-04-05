// Start BlogRoute
import express from "express";
import {
  createBlog,
  getUserBlogs,
  getSavedBlogs,
  getRandomBlogs,
} from "../controllers/BlogControllers.js";

const BlogRoute = express.Router();

BlogRoute.post("/createBlog", createBlog);
BlogRoute.get("/getUserBlogs/:id", getUserBlogs);
BlogRoute.get("/getSavedBlogs/:id", getSavedBlogs);
BlogRoute.get("/getRandomBlogs", getRandomBlogs);

export default BlogRoute;
