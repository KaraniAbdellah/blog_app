// Start UserRoute
import express from "express";
import {
    getSavedBlog, saveBlog
} from "../controllers/SavedBlogControllers.js";

const UserRoute = express.Router();
UserRoute.get("/getSavedBlog", getSavedBlog);
UserRoute.get("/savedBlog/:id", saveBlog);



export default UserRoute;
