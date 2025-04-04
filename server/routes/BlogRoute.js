// Start BlogRoute
import express from "express";
import {createBlog, getBlogs} from "../controllers/BlogControllers.js";

const BlogRoute = express.Router();



BlogRoute.post("/createBlog", createBlog);
BlogRoute.get("/getBlogs", getBlogs);


export default BlogRoute;

