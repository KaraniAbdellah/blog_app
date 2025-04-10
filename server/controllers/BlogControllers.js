import BlogModel from "../models/Blog.js";
import jwt from "jsonwebtoken";
import SavedBlogModel from "../models/Saved.js";



// @desc Create New Blog
// @route POST /blog/createBlog
// @access Private
const createBlog = async (req, res) => {
  const token = req.cookies.user_token;
  try {
    const isTokenValid = jwt.verify(token, process.env.SECRET_KEY);
    const blog = await BlogModel.create(req.body);
    res.status(200).send(blog);
  } catch (error) {
    res.status(400).send({ message: "Can Not Create This Blog" + error });
  }
};



// @desc Get User Blogs
// @route GET /blog/getUserBlogs
// @access Private
const getUserBlogs = async (req, res) => {
  const id = req.params.id;
  const token = req.cookies.user_token;
  try {
    const isTokenValid = jwt.verify(token, process.env.SECRET_KEY);
    const blogs = await BlogModel.find({ owner: id }).populate("owner");
    res.status(200).send(blogs);
  } catch (error) {
    res.status(400).send({ message: "Can Not Create This Blog" + error });
  }
};



// @desc Get Random Blogs
// @route GET /blog/getRandomBlogs
// @access Public
const getRandomBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.find().populate("owner");
    res.status(200).send(blogs);
  } catch (error) {
    res.status(400).send({ message: "Can Not Create This Blog" + error });
  }
};



// @desc Delete Blog
// @route DELETE /blog/deleteBlog
// @access Private
const deleteBlog = async (req, res) => {
  const token = req.cookies.user_token;
  const blogId = req.params.id;
  try {
    const isTokenValid = jwt.verify(token, process.env.SECRET_KEY);
    // Delete Blog From Blog Model
    const DeletedBlog = await BlogModel.findByIdAndDelete(blogId);
    // Delete Blog From Saved Item
    const DeleteSavedBlog = await SavedBlogModel.deleteOne({ blog: blogId });
    res.status(200).json({ message: "Blog Deleted Succefully" });
  } catch (error) {
    res.status(400).send({ message: "Can not Saved This Blog" });
  }
};


// @desc Edit Blog Infomation
// @route PUT /blog/editBlog
// @access Private
const editBlog = async (req, res) => {
  const token = req.cookies.user_token;
  const blogId = req.params.id;
  try {
    const isTokenValid = jwt.verify(token, process.env.SECRET_KEY);
    // Edited Blog From Blog Model
    const EditedBlog = await BlogModel.findByIdAndUpdate(blogId, req.body);
    res.status(200).json({ message: "Blog Deleted Succefully" });
  } catch (error) {
    res.status(400).send({ message: "Can not Saved This Blog" });
  }
};



// @desc Get Random Blogs
// @route GET /blog/getBlogById/:id
// @access Private
const getBlogById = async (req, res) => {
  const blogId = req.params.id;
  const token = req.cookies.user_token;
  try {
    const isTokenValid = jwt.verify(token, process.env.SECRET_KEY);
    const blogDetails = await BlogModel.findById(blogId).populate("owner");
    if (blogDetails) {
      res.status(200).json(blogDetails);
      return;
    }
  } catch (error) {
    res.status(400).send({ message: "Can not Find This Blog" });
  }
};



// @desc AddLike To Blog
// @route POST /blog/addLike/:id
// @access Private
const addLike = async (req, res) => {
  const token = req.cookies.user_token;
  const id = req.params.id;
  try {
    const isTokenValid = jwt.verify(token, process.env.SECRET_KEY);
    const oldBlog = await BlogModel.findById(id);
    const blog = await BlogModel.findByIdAndUpdate(
      id,
      { likesNumber: oldBlog.likesNumber + 1 },
      { new: true }
    );
    res.status(200).send(blog);
  } catch (error) {
    res.status(400).send({error: error});
    console.log(error);
  }
};



// @desc Add Comment To Blog
// @route POST /blog/addComment/:id
// @access Private
const addComment = async (req, res) => {
  console.log("Hello World");
  const id = req.params.id;
  const token = req.cookies.user_token;
  try {
    const isTokenValid = await jwt.verify(token, process.env.SECRET_KEY);
    const OldBlog = await BlogModel.findById(id);
    const blog = await BlogModel.findByIdAndUpdate(id, {
      Commentes: [...OldBlog.Commentes, req.body.comment],
      commentsNumber: OldBlog.commentsNumber + 1
    });
    res.status(200).send(blog);
  } catch (error) {
    res.status(400).send({error: error});
    console.log(error);
  }
};


// @desc get Blog By Category
// @route POST /blog/getBlogByCategory/:category
// @access Public
const getBlogByCategory = async (req, res) => {
  const category = req.params.category;
  console.log("Hello World");
  try {
    console.log(category);
    const FiltredBlogs = await BlogModel.find({Category: category}).populate("owner");
    console.log(FiltredBlogs);
    res.status(200).send(FiltredBlogs);
  } catch (error) {
    res.status(400).send({message: "An Error in Finding Blogs"});
  }
}

// @desc Get Blog By Search [Keyword]
// @route POST /blog/getBlogsBySearch/:seacrhed
// @access Public
const getBlogsBySearch = async (req, res) => {
  const seacrhed = req.params.searched;
  try {
    console.log(seacrhed);
    const FiltredBlogs = await BlogModel.find({blogTitle: {$regex: seacrhed, $options: "i"}}).populate("owner");
    res.status(200).send(FiltredBlogs);
  } catch (error) {
    res.status(400).send({message: "An Error in Finding Blogs"});
  }
}


export {
  createBlog,
  getUserBlogs,
  getRandomBlogs,
  deleteBlog,
  getBlogById,
  addLike,
  addComment,
  getBlogByCategory,
  getBlogsBySearch,
  editBlog
};
