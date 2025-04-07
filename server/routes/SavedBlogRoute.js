// Start UserRoute
import express from "express";
import {
    getSavedBlog, saveBlog, deleteSavedBlog
} from "../controllers/SavedBlogControllers.js";

const UserRoute = express.Router();
UserRoute.get("/getSavedBlog", getSavedBlog);
UserRoute.get("/savedBlog/:id", saveBlog);
UserRoute.delete("/deleteSavedBlog/:id", deleteSavedBlog);



export default UserRoute;
