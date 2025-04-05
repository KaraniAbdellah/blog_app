import BlogModel from "../models/Blog.js";
import jwt from "jsonwebtoken";

// @desc Create New Blog
// @route Register POST /blog/createBlog
// @access Private
const createBlog = async (req, res) => {
  const token = req.cookies.user_token;
  try {
    console.log("Hello", token);
    const isTokenValid = await jwt.verify(token, process.env.SECRET_KEY);
    console.log(isTokenValid);
    const blog = await BlogModel.create(req.body);
    res.status(200).send(blog);
  } catch (error) {
    res.status(400).send({ message: "Can Not Create This Blog" + error });
  }
};

// @desc Get User Blogs
// @route Register GET /blog/getUserBlogs
// @access Private
const getUserBlogs = async (req, res) => {
  console.log("Get User Blogs");
  const id = req.params.id;
  const token = req.cookies.user_token;
  try {
    const isTokenValid = await jwt.verify(token, process.env.SECRET_KEY);
    const blogs = await BlogModel.find({ owner: id }).populate("owner");
    console.log(blogs);

    res.status(200).send(blogs);
  } catch (error) {
    res.status(400).send({ message: "Can Not Create This Blog" + error });
  }
};

// @desc Get Random Blogs
// @route Register GET /blog/getRandomBlogs
// @access Private
const getRandomBlogs = async (req, res) => {
  try {
    // Must Get Just 10 Blogs
    const blogs = await BlogModel.find().populate("owner");
    res.status(200).send(blogs);
  } catch (error) {
    res.status(400).send({ message: "Can Not Create This Blog" + error });
  }
};

export { createBlog, getUserBlogs, getRandomBlogs };
