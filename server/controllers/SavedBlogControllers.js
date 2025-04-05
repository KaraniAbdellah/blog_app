import BlogModel from "../models/Saved.js";
import jwt from "jsonwebtoken";

// @desc Create New Blog
// @route Register POST /blog/createBlog
// @access Private
const getSavedBlog = async (req, res) => {
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

export { getSavedBlog };
