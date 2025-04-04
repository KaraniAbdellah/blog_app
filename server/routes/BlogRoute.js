// Start BlogRoute
import express from "express";
import {createBlog, getBlogs} from "../controllers/BlogControllers.js";

const BlogRoute = express.Router();



BlogRoute.post("/createBlog", createBlog);
BlogRoute.post("/getBlogs", getBlogs);


export default BlogRoute;

