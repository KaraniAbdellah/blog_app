// Start BlogRoute
import express from "express";
import BlogModel from "../models/Blog.js";

const BlogRoute = express.Router();



BlogRoute.post("/createBlog", async (req, res) => {
    try {
        console.log(req.body);
        const blog = await BlogModel.create(req.body);
        res.status(200).send(blog);
    } catch (error) {
        res.status(400).send({message: "Can Not Create This Blog" + error});
    }
});

export default BlogRoute;

