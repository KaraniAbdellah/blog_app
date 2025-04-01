// Start UserRoute
import express from "express";
import {
  register,
  login,
  profile,
  logout,
} from "../controllers/UserControllers.js";

const UserRoute = express.Router();
UserRoute.post("/register", register);
UserRoute.post("/login", login);
UserRoute.get("/profile", profile);
UserRoute.get("/logout", logout);

export default UserRoute;
