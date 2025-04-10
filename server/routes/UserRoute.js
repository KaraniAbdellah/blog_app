// Start UserRoute
import express from "express";
import {
  register,
  login,
  profile,
  logout,
  getUserById
} from "../controllers/UserControllers.js";


const UserRoute = express.Router();
UserRoute.post("/register", register);
UserRoute.post("/login", login);
UserRoute.get("/getUserById", getUserById);
UserRoute.get("/profile", profile);
UserRoute.get("/logout", logout);

export default UserRoute;
