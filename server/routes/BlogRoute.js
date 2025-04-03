// Start BlogRoute
import express from "express";
import BlogModel from "../models/Blog.js";

const BlogRoute = express.Router();



BlogRoute.post("/createBlog", async (req, res) => {
    try {
        console.log(req.body);
        
    } catch (error) {
        
    }
});

export default BlogRoute;

