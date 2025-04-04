import BlogModel from '../models/Blog.js';

// @desc Create New Blog
// @route Register POST /blog/createBlog
// @access Private
const createBlog = async (req, res) => {
  try {
    console.log(req.body);
    const blog = await BlogModel.create(req.body);
    res.status(200).send(blog);
  } catch (error) {
    res.status(400).send({ message: "Can Not Create This Blog" + error });
  }
};

// @desc Create New Blog
// @route Register POST /blog/getBlogs
// @access Public
const getBlogs = async (req, res) => {
    try {
      const blogs = await BlogModel.find();
      res.status(200).send(blogs);
    } catch (error) {
      res.status(400).send({ message: "Can Not Create This Blog" + error });
    }
  };


export {createBlog, getBlogs};
