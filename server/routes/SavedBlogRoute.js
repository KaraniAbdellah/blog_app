// Start UserRoute
import express from "express";
import {
    getSavedBlog,
} from "../controllers/SavedBlogControllers.js";

const UserRoute = express.Router();
UserRoute.get("/getSavedBlog", getSavedBlog);



export default UserRoute;
