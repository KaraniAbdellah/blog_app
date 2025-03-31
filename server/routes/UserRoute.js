// Start UserRoute
import express from "express";
import { register, login } from "../controllers/UserControllers.js";

const UserRoute = express.Router();
UserRoute.use("/register", register);
UserRoute.use("/login", login);



export default UserRoute;
