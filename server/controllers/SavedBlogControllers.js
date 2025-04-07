import SavedModel from "../models/Saved.js";
import BlogModel from "../models/Blog.js";
import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";

// @desc Save Blog
// @route Register POST /saved/getSavedBlog
// @access Private
const getSavedBlog = async (req, res) => {
  const token = req.cookies.user_token;
  try {
    const isTokenValid = await jwt.verify(token, process.env.SECRET_KEY);
    console.log("Hello World");
    const savedBlogs = await SavedModel.find({ owner: isTokenValid.id })
      .populate("blog")
      .populate("owner");

    const blogs = await Promise.all(
      savedBlogs.map(async (SBlog) => {
        const blogOwner = await UserModel.findById(SBlog.blog.owner);
        SBlog.blog.owner = blogOwner;
        return SBlog.blog;
      })
    );

    res.status(200).send(blogs);
  } catch (error) {
    res.status(400).send({ message: "Can Not Get Saved Blog" });
  }
};

// @desc Save Blog
// @route Register POST /saved/getSavedBlog
// @access Private
const saveBlog = async (req, res) => {
  const token = req.cookies.user_token;
  const blogId = req.params.id;
  try {
    const isTokenValid = jwt.verify(token, process.env.SECRET_KEY);

    const IsThisBlogSaved = await SavedModel.findOne({blog: blogId});
    console.log(IsThisBlogSaved);
    if (IsThisBlogSaved) {
      res.status(400).json({message: "This Blog Already Saved"});
      return;
    }
    console.log("Save The Blog");

    const savedBlog = await SavedModel.create({
      owner: isTokenValid.id,
      blog: blogId,
    });

    const blogEdited = await BlogModel.findByIdAndUpdate(
      blogId,
      { isSaved: true },
      { new: true }
    );

    res.status(200).send(savedBlog);
  } catch (error) {
    res.status(400).send({ message: "Can not Saved This Blog" });
  }
};


// @desc Save Blog
// @route Register POST /saved/getSavedBlog
// @access Private
const deleteSavedBlog = async (req, res) => {
  const token = req.cookies.user_token;
  const blogId = req.params.id;
  try {
    const isTokenValid = jwt.verify(token, process.env.SECRET_KEY);
    const DeletedBlog = await SavedModel.deleteOne({blog: blogId});
    res.status(200).json({message: "Blog Deleted Succefully"});
  } catch (error) {
    res.status(400).send({ message: "Can not Saved This Blog" });
  }
};


export { getSavedBlog, saveBlog, deleteSavedBlog };
