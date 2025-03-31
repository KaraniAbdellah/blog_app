// Start UserRoute
import express from "express";
import { register } from "../controllers/UserControllers.js";

const UserRoute = express.Router();
UserRoute.use("/register", register);


export default UserRoute;

